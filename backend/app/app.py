from fastapi import FastAPI,HTTPException
from app.schemas import PostCreate
from fastapi.middleware.cors import CORSMiddleware
import json
app= FastAPI()
with open('posts.json','r') as f:
    text_posts=json.load(f)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)




@app.get('/posts')
def get_all_posts(limit: int=None):
    if limit:
        return list(text_posts.values())[:limit]
    return text_posts

@app.get('/posts/{id}')
def get_posts(id :int):
    if id not in text_posts:
        raise HTTPException(status_code=404, detail='Post Not found')
                      

    return text_posts.get(id)

@app.post('/posts')
def create_post(post :PostCreate):
    new_post = {'title':post.title, 'content':post.content}
    text_posts[max(text_posts.keys())+1]=new_post
    # text_posts.push(new_post)
    return new_post

@app.delete('/posts/{id}')
def delete_post(id:int):
    text_posts.pop(id)
    return text_posts