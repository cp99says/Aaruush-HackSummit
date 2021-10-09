import io
import requests
import pytesseract
from PIL import Image

def convert_img2text(image_link: str):
    response = requests.get(image_link)
    # print( type(response) ) # <class 'requests.models.Response'>
    img = Image.open(io.BytesIO(response.content))
    # print( type(img) ) # <class 'PIL.JpegImagePlugin.JpegImageFile'>
    return pytesseract.image_to_string(img)