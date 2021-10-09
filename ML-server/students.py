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


