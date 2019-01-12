from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.db import connection
from django.http import JsonResponse
import json
from .models import *

def Signup(request):
	if request.method == 'POST':
		print(request.body)
		info=json.loads(request.body)
		pwd = info['password']
		password = pwd[::-1]
		check=Signin.objects.filter(username=info['username']).values('name')
		if check:
			return JsonResponse({"message": "Username already taken"},status=200)
		else:
			query = Signin.objects.create(name=info['name'],mobile=info['mobile'], password=password,username= info['username'],email=info['email'])
			if query:
	
				return JsonResponse({"message": "Successfully registered"},status=200)

	else:
		return JsonResponse({"message":"Could not submit"},status=502)

def login(request):
	data_values={}
	if request.method == 'POST':
	  	info =json.loads(request.body.decode("utf-8"))
	  	pwd = info['password']
	  	password = pwd[::-1]
	  	query=Signin.objects.filter(username=info['username'],password=password).values('uniq_id')
	  	if list(query):
	  		data_values={'message':"Success",'uniq_id':query[0]['uniq_id']}
	  		return JsonResponse(data=data_values,status=200,safe=False)
	  	else:
	  		return  JsonResponse({"message":"invalid credentials"},status=200)

	else:
		return JsonResponse({"message":"Error"},status=502)

def user_data(request):
	if request.method == 'POST':
		info =json.loads(request.body.decode("utf-8"))
		query = Materials.objects.create(sub_category=info['sub_category'],category=info['category'],added_by=Signin.objects.get(uniq_id=info['add_by'],authsize=info['authsize'],quantity=info['quantity'],standardsize=info['standardsize']))
		if (query):
			print(query)
			return JsonResponse({"message":"Successfully added"},status=200)

		else:
			return  JsonResponse({"message":"Error adding question"},status=200)

	else:
		return JsonResponse({"message":"Error"},status=502)

# def view(request):

# 	if request.method == 'GET':
# 		data_values = []
# 		query=list(Ques.objects.values('question','category','ques_id','added_by__name').order_by('-ques_id'))
# 		for qu in query:
# 		  answer=Answer.objects.filter(question_id=qu['ques_id']).values('answer','answer_id','added_by__name','added_by__gender','upvote','downvote_by').order_by('-upvote')
# 		  data_values.append({'ques':qu,'answer':list(answer)})
# 		if query:
# 			print(data_values)
# 			return JsonResponse(data_values, status=200,safe=False)
# 			print(data_values)
# 		else:
# 			print("FF")
# 			return JsonResponse({"message": "Error"},status=200, safe=False)
# 	else:
# 		print("XXX")
# 		return JsonResponse({"message":"Could not display"},status=502, safe=False)

# def ques_view(request):

# 	if request.method == 'GET':
# 		data_values = []
# 		query=list(Ques.objects.values('question','category','ques_id','added_by__name').order_by('-ques_id'))[:20]
# 		data_values.append({'ques':qu})
# 		if query:
# 			print(data_values)
# 			return JsonResponse(data_values, status=200,safe=False)
# 			print(data_values)
# 		else:
# 			print("FF")
# 			return JsonResponse({"message": "Error"},status=200, safe=False)
# 	else:
# 		print("XXX")
# 		return JsonResponse({"message":"Could not display"},status=502, safe=False)

# def filtered_view(request):

# 	if request.method == 'GET':
# 		data_values = []
# 		query=list(Ques.objects.filter(category=request.GET['category']).values('question','category','ques_id','added_by__name').order_by('-ques_id'))
# 		for qu in query:
# 		  answer=Answer.objects.filter(question_id=qu['ques_id']).values('answer','answer_id','added_by__name','added_by__gender','upvote','downvote_by').order_by('-upvote')
# 		  data_values.append({'ques':qu,'answer':list(answer)})
# 		if query:
# 			print(data_values)
# 			return JsonResponse(data_values, status=200,safe=False)
# 			print(data_values)
# 		else:
# 			print("FF")
# 			return JsonResponse({"message": "Error"},status=200, safe=False)
# 	else:
# 		print("XXX")
# 		return JsonResponse({"message":"Could not display"},status=502, safe=False)


# def add_answer(request):

#   if request.method=='POST':
# 	info =json.loads(request.body)
# 	print(info['uniq_id'])
# 	query = Answer.objects.create(answer=info['answer'],question_id=Ques.objects.get(ques_id=info['ques_id']),added_by=Signin.objects.get(uniq_id=info['uniq_id']))
# 	if query:
# 	  return JsonResponse({"message":"Success"},status=200,safe=False)
# 	else:
# 	  return JsonResponse({"message":"Error"},status=200,safe=False)
#   else:
# 	return JsonResponse({"message":"Bad request"},status=502,safe=False)

# def my_ques_view(request):

# 	if request.method == 'GET':
# 		data_values = []
# 		query=list(Ques.objects.filter(added_by=request.GET['uniq_id'],category=request.GET['category']).values('question','category','ques_id','added_by__name').order_by('-ques_id'))
# 		for qu in query:
# 		  answer=Answer.objects.filter(question_id=qu['ques_id']).values('answer','answer_id','added_by__name','added_by__gender','upvote','downvote_by').order_by('-upvote')
# 		  data_values.append({'ques':qu,'answer':list(answer)})
# 		if query:
# 			print(data_values)
# 			return JsonResponse(data_values, status=200,safe=False)
# 			print(data_values)
# 		else:
# 			print("FF")
# 			return JsonResponse({"message": "Error"},status=200, safe=False)
# 	else:
# 		print("XXX")
# 		return JsonResponse({"message":"Could not display"},status=502, safe=False)

# def my_answer_view(request):

#   if request.method == 'GET':
# 	data_values=[]
# 	query=Answer.objects.filter(ques_id=request.GET['ques_id']).values('answer','answer_id','added_by__name','added_by__gender')
# 	if query:
# 		data_values.append({'answers':list(query)})

# 	return JsonResponse(data_values,status=200,safe=False)
#   else:
# 	return JsonResponse({"message":"Error"},status=502)

# def vote(request):

#   if request.method == 'POST':
# 	info=json.loads(request.body)
# 	q1=Vote.objects.filter(vote_by=Signin.objects.get(uniq_id=info['uniq_id']),answer_id=Answer.objects.get(answer_id=info['answer_id'])).values('up')
# 	if q1:
# 	  return JsonResponse({"message": "You have already voted"},status=200, safe=False)
# 	else:
# 	  if info['vote'] == 'u':
# 	   query=Vote.objects.create(vote_by=Signin.objects.get(uniq_id=info['uniq_id']),up=info['vote_id'],answer_id=Answer.objects.get(answer_id=info['answer_id']))
# 	   query1=Answer.objects.filter(answer_id=info['answer_id']).values_list('upvote',flat=True)
# 	   vote=query1[0]+1
# 	   query2=Answer.objects.filter(answer_id=info['answer_id']).update(upvote=vote)

# 	  elif info['vote'] == 'd':
# 	   query=Vote.objects.create(vote_by=Signin.objects.get(uniq_id=info['uniq_id']),down=info['vote_id'],answer_id=Answer.objects.get(answer_id=info['answer_id']))
# 	   query1=Answer.objects.filter(answer_id=info['answer_id']).values_list('downvote_by',flat=True)
# 	   vote=query1[0]+1
# 	   query2=Answer.objects.filter(answer_id=info['answer_id']).update(downvote_by=vote)

# 	return JsonResponse({"message":"voted"})
#   else:
# 	return JsonResponse({"message":"Could not vote"},status=502, safe=False)



# def blogapp(request):
#   data_values=[]
#   if request.method == 'GET':
# 	query=list(BlogApp.objects.values('description','title','added_by__name','added_by__gender','blog_id').order_by('-blog_id'))
# 	if query:
# 	  data_values=query
# 	  print(data_values)
# 	  return JsonResponse(data_values, status=200,safe=False)
# 	else:
# 	  return JsonResponse({"message": "Error"},status=200, safe=False)
#   else:
# 	 return JsonResponse({"message":"Could not display"},status=502, safe=False)   

# def my_blog_view(request):

#   if request.method == 'GET':
# 	data_values=[]
# 	query=BlogApp.objects.filter(added_by=request.GET['uniq_id']).values('description','title','blog_id').order_by('-blog_id')
# 	data_values.append({'blogs':list(query)})
# 	return JsonResponse(data_values,status=200,safe=False)
#   else:
# 	return JsonResponse({"message":"Error"},status=502) 

# def add_blog(request):

#   if request.method=='POST':
# 	info =json.loads(request.body)
# 	print(info['uniq_id'])
# 	query = BlogApp.objects.create(description=info['description'],title=info['title'],added_by=Signin.objects.get(uniq_id=info['uniq_id']))
# 	if query:
# 	  return JsonResponse({"message":"Success"},status=200,safe=False)
# 	else:
# 	  return JsonResponse({"message":"Error"},status=200,safe=False)
#   else:
# 	return JsonResponse({"message":"Bad request"},status=502,safe=False)

# def my_ques_view_all(request):

# 	if request.method == 'GET':
# 		data_values = []
# 		query=list(Ques.objects.filter(added_by=request.GET['uniq_id']).values('question','category','ques_id','added_by__name').order_by('-ques_id'))
# 		for qu in query:
# 		  answer=Answer.objects.filter(question_id=qu['ques_id']).values('answer','answer_id','added_by__name','added_by__gender','upvote','downvote_by').order_by('-upvote')
# 		  data_values.append({'ques':qu,'answer':list(answer)})
# 		if query:
# 			print(data_values)
# 			return JsonResponse(data_values, status=200,safe=False)
# 			print(data_values)
# 		else:
# 			return JsonResponse({"message": "Error"},status=200, safe=False)
# 	else:
# 		return JsonResponse({"message":"Could not display"},status=502, safe=False)


# def details(request):
#   data_values=[]
#   if request.method == 'GET':
# 	query=Signin.objects.filter(uniq_id=request.GET['uniq_id']).values('name','username','mobile','gender','email')
# 	data_values.append({'details':list(query)})
# 	return JsonResponse(data_values, status=200,safe=False)
#   else:
# 	return JsonResponse({"message":"Could not display"},status=502, safe=False)



	






