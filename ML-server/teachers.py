from fastapi import APIRouter, Depends, HTTPException, Response, Request, status
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
from thefuzz import fuzz
from typing import *
import motor.motor_asyncio
from dotenv import load_dotenv
from utils.img2text import convert_img2text
from utils.similarity import *
from bson import ObjectId
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
marks = database.get_collection("Marks")
# qa_model = pipeline("question-generation", qg_format="prepend")
# ans = pipeline("multitask-qa-qg", model="valhalla/t5-base-qa-qg-hl", qg_format="prepend")
class Similarity(BaseModel):
    original: str
    response: str
    
class Upload_Object(BaseModel):
    blob_url: str
    question_count : int
    subject: str  # phy and chem
    topic_name: str
    
class ExamSchema(BaseModel):
    _id : ObjectId
    exam_started : bool
    teacher_id : str
    total_questions : int
    exam_type : str
    questions : list

# class MarksSchema(BaseModel):