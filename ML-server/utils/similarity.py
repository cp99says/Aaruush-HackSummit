from thefuzz import fuzz

def similarity(original, response):
    return fuzz.token_sort_ratio(original, response)/10

def match_answer(es, response, qid):    
    for e in es:
        if e['question_id'] == qid:
            return similarity(e['answer'], response)
    return 0