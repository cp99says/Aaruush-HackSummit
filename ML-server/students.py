from utils.transformer_src import *
from fastapi import APIRouter, Depends, HTTPException, Response, Request, status
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from fastapi.encoders import jsonable_encoder
from typing import List
from pydantic import BaseModel
import pke
from bson import ObjectId
from nltk.tokenize import sent_tokenize
from flashtext import KeywordProcessor
import motor.motor_asyncio
from dotenv import load_dotenv
from utils.img2text import convert_img2text
from utils.load_models import *
import uuid 
import random
import datetime 
import os

load_dotenv()



client = motor.motor_asyncio.AsyncIOMotorClient(os.environ.get('MONGO_URL'))
database = client['Hacksummit_DB']
exam = database.get_collection("Exams")
response = database.get_collection("Responses")


class Upload_Object(BaseModel):
    blob_url: str
    blob_type : str

class AnswerGen(Upload_Object):
    question: str
# qa_model = pipeline("question-generation", model="valhalla/t5-small-qg-prepend", qg_format="prepend")
# ans = pipeline("multitask-qa-qg", qg_format="prepend")

class StudentResponse(BaseModel):
    QuestionID : str
    response : str
class ResponseSchema(BaseModel):
    student_username: str
    answers: List[StudentResponse]
    

app = APIRouter()


@app.post('/keytopics', status_code = 200)
async def getkeytopics(img_details: Upload_Object):
    img_text = convert_img2text(img_details.blob_url)    
    extractor = pke.unsupervised.TopicRank()
    extractor.load_document(input=img_text, language='en_core_web_sm')
    extractor.candidate_selection()
    extractor.candidate_weighting()
    keyphrases = extractor.get_n_best(n=10)
    keyphrases = [keyphrase[0] for keyphrase in keyphrases]
    

    def tokenize_sentences(text):
        sentences = [sent_tokenize(text)]
        sentences = [y for x in sentences for y in x]
        sentences = [sentence.strip() for sentence in sentences if len(sentence) > 20]
        return sentences

    def get_sentences_for_keyword(keywords, sentences):
        keyword_processor = KeywordProcessor()
        keyword_sentences = {}
        for word in keywords:
            keyword_sentences[word] = []
            keyword_processor.add_keyword(word)
        for sentence in sentences:
            keywords_found = keyword_processor.extract_keywords(sentence)
            for key in keywords_found:
                keyword_sentences[key].append(sentence)

        for key in keyword_sentences.keys():
            values = keyword_sentences[key]
            values = sorted(values, key=len, reverse=True)
            keyword_sentences[key] = values
        return keyword_sentences

    sentences = tokenize_sentences(img_text)
    keyword_sentence_mapping = get_sentences_for_keyword(keyphrases, sentences)
    return keyword_sentence_mapping