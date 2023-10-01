import joblib
import numpy as np
import pandas as pd

from collections import Counter
import pickle
from django.contrib.auth import login
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .models import Score
from .serializers import UserSerializer, RegisterSerializer, ScoreSerializer,ScoreSerializer2,ScoreSerializer3
from knox.auth import TokenAuthentication
from django.db import transaction
from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView
from rest_framework.generics import ListAPIView

from django.shortcuts import render
from django.contrib.staticfiles import finders



class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        print(serializer)
        serializer.is_valid(raise_exception=True)
        print("Validated")
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)


class ScoreCreateView(generics.CreateAPIView):
    serializer_class = ScoreSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
    model_path_finalized ="finalized_model_eng.sav"
    model_path_medical ="medical_model_final.sav"
    model_finalized = joblib.load(model_path_finalized)
    model_medical = joblib.load(model_path_medical)


    def init(self, *args, **kwargs):
        super().init(*args, **kwargs)    

    #def preprocessing(self, answers):
    def preprocessing(self, data):

        introvert = 0
        sensing = 0
        Judging = 0
        Thinking = 0
        logical_intelligence = 0
        Nature_intelligence = 0
        Visual_intelligence = 0
        Musical_intelligence = 0
        Body_intelligence = 0
        Interpersonal_intelligence = 0
        Intrapersonal_intelligence = 0
        Verbal_intelligence = 0
        Existential_intelligence = 0
        gender = 0
        income_group = 0
        BTN = 0
        answers = data['answers']
         
        for keys in answers:
            if keys in ["mbti-I/E-question1", "mbti-I/E-question2","mbti-I/E-question3",
                        "mbti-I/E-question4", "mbti-I/E-question5", "mbti-I/E-question6",
                        "mbti-I/E-question7"]:
                introvert += answers[keys]

            elif keys in ["mbti-S/N-question8", "mbti-S/N-question9", "mbti-S/N-question10",
                          "mbti-S/N-question11", "mbti-S/N-question12","mbti-S/N-question13",
                          "mbti-S/N-question14"]:
                sensing += answers[keys]

            elif keys in ["mbti-J/P-question15", "mbti-J/P-question16", "mbti-J/P-question17",
                          "mbti-J/P-question18", "mbti-J/P-question19", "mbti-J/P-question20",
                          "mbti-J/P-question21"]:
                Judging += answers[keys]

            elif keys in ["mbti-T/F-question22", "mbti-T/F-question23", "mbti-T/F-question24",
                          "mbti-T/F-question25", "mbti-T/F-question26", "mbti-T/F-question27",
                          "mbti-T/F-question28"]:
                Thinking += answers[keys]

            elif keys in ["mi-question9", "mi-question10", "mi-question11", "mi-question12"]:
                logical_intelligence += answers[keys]

            elif keys in ["mi-question29", "mi-question30", "mi-question31", "mi-question32"]:
                Nature_intelligence += answers[keys]

            elif keys in ["mi-question5", "mi-question6", "mi-question7", "mi-question8"]:
                Visual_intelligence += answers[keys]

            elif keys in ["mi-question21", "mi-question22","mi-question23","mi-question24"]:
                Musical_intelligence += answers[keys]

            elif keys in ["mi-question25","mi-question26","mi-question27","mi-question28"]:
                Body_intelligence += answers[keys]

            elif keys in ["mi-question13","mi-question14","mi-question15","mi-question16"]:
                Interpersonal_intelligence += answers[keys]

            elif keys in ["mi-question17","mi-question18","mi-question19","mi-question20"]:
                Intrapersonal_intelligence += answers[keys]

            elif keys in ["mi-question1", "mi-question2","mi-question3", "mi-question4"]:
                Verbal_intelligence += answers[keys]

            elif keys in ["mi-question33","mi-question34","mi-question35","mi-question36"]:
                Existential_intelligence += answers[keys]

            elif (keys == "self-question1"):
                gender=answers[keys]

            elif (keys == "self-question2"):
                income_group=answers[keys]
            elif (keys == "options"):
                BTN=answers[keys]

        introvert = introvert/7
        sensing = sensing/7
        Judging = Judging/7
        Thinking = Thinking/7

        logical_intelligence = logical_intelligence/5
        Nature_intelligence = Nature_intelligence/5
        Visual_intelligence = Visual_intelligence/5
        Musical_intelligence = Musical_intelligence/5
        Body_intelligence = Body_intelligence/5
        Interpersonal_intelligence = Interpersonal_intelligence/5
        Intrapersonal_intelligence = Intrapersonal_intelligence/5
        Verbal_intelligence = Verbal_intelligence/5
        Existential_intelligence = Existential_intelligence/5

        preprocessed_data = {
            "gender": gender,
            "income_group": income_group,
            "sensing": sensing,
            "introvert": introvert,
            "Judging": Judging,
            "Thinking": Thinking,
            "logical_intelligence": logical_intelligence,
            "Nature_intelligence": Nature_intelligence,
            "Visual_intelligence": Visual_intelligence,
            "Musical_intelligence": Musical_intelligence,
            "Body_intelligence": Body_intelligence,
            "Interpersonal_intelligence": Interpersonal_intelligence,
            "Intrapersonal_intelligence": Intrapersonal_intelligence,
            "Verbal_intelligence": Verbal_intelligence,
            "Existential_intelligence": Existential_intelligence,
            "button":BTN
        }

        return preprocessed_data


    def get_new_data(self):

        last_entry = Score.objects.latest("id")

        values_list = [
        last_entry.gender,
        last_entry.income_group,
        last_entry.sensing,
        last_entry.introvert,
        last_entry.Judging,
        last_entry.Thinking,
        last_entry.logical_intelligence,
        last_entry.Nature_intelligence,
        last_entry.Visual_intelligence,
        last_entry.Musical_intelligence,
        last_entry.Body_intelligence,
        last_entry.Interpersonal_intelligence,
        last_entry.Intrapersonal_intelligence,
        last_entry.Verbal_intelligence,
        last_entry.Existential_intelligence
    ]

        return values_list


    def  new_trained_eng_model(self,values_array):
        previous_entry=self.get_new_data()
        print(previous_entry)
        previous_entry = np.array(previous_entry)
        previous_entry=previous_entry.reshape(1,15)
        print(previous_entry)

        previous_prediction=self.model_finalized.predict(previous_entry)
        print(previous_prediction)

        
        previous_prediction = np.array([previous_prediction])

        appended_array = np.append(previous_entry, previous_prediction,axis=1)

        print(appended_array)
        print(appended_array.shape)    


        dataset = pd.read_csv("engineering data (final).csv")
        appended_array = pd.DataFrame(appended_array, columns=dataset.columns)
        # print(appended_array.shape)  
        print(dataset.shape)  
        #appended_array = pd.DataFrame(np.ravel(appended_array), columns=dataset.columns).T
            
        combined_dataset = pd.concat((dataset, appended_array), axis=0)
        combined_dataset.to_csv("engineering data (final).csv", index=False)

        print(combined_dataset.shape)

        features = combined_dataset.drop(['Specialization:'], axis=1) 
        target = combined_dataset['Specialization:']  

        self.model_finalized.fit(features,target)

        filename = 'retrained_eng_model.sav'
        pickle.dump(self.model_finalized, open(filename, 'wb'))

        with open('retrained_eng_model.sav', 'rb') as f:
            retrained_model_eng = pickle.load(f)

        predicted_results = retrained_model_eng.predict_proba(values_array)
        print(predicted_results)
        predicted_results = predicted_results.tolist()[0]
        predicted_results = [round(num*100, 2) for num in predicted_results]
        print(predicted_results)
        return predicted_results
    
    def  new_trained_med_model(self,values_array):
        previous_entry=self.get_new_data()
        print(previous_entry)
        previous_entry = np.array(previous_entry)
        previous_entry=previous_entry.reshape(1,15)
        print(previous_entry)

        previous_prediction=self.model_medical.predict(previous_entry)
        print(previous_prediction)

        
        previous_prediction = np.array([previous_prediction])

        appended_array = np.append(previous_entry, previous_prediction,axis=1)

        print(appended_array)
        print(appended_array.shape)    


        dataset_med = pd.read_csv("MEDICAL FIELD DATA(CLEANED).csv")
        appended_array = pd.DataFrame(appended_array, columns=dataset_med.columns)
        # print(appended_array.shape)  
        print(dataset_med.shape)  
        #appended_array = pd.DataFrame(np.ravel(appended_array), columns=dataset.columns).T
            
        combined_dataset_med = pd.concat((dataset_med, appended_array), axis=0)
        combined_dataset_med.to_csv("MEDICAL FIELD DATA(CLEANED).csv", index=False)

        print(combined_dataset_med.shape)

        features = combined_dataset_med.drop(['Specialization:'], axis=1) 
        target = combined_dataset_med['Specialization:']  

        self.model_medical.fit(features,target)

        filename = 'retrained_med_model.sav'
        pickle.dump(self.model_medical, open(filename, 'wb'))

        with open('retrained_med_model.sav', 'rb') as f:
            retrained_model_med = pickle.load(f)

        predicted_results_med = retrained_model_med.predict_proba(values_array)
        predicted_results_med = predicted_results_med.tolist()[0]
        predicted_results_med1 = [round(num*100, 2) for num in predicted_results_med]
        #print(predicted_results_med)
        return predicted_results_med1

    
    def prediction(self, test_data):
        values_array = np.array(list(test_data.values())[:-1])
        values_array=values_array.reshape(1,15)
     

        btn = test_data['button']

        # for engineering
        if btn == 0:

            predicted_results_eng=self.new_trained_eng_model(values_array)            
        
            labels_eng=['Biomedical Engineering', 'Chemical Engineering',
            'Civil Engineering',
            'Computer and Information Systems Engineering',
            'Electrical Engineering', 'Mechanical Engineering',
            'Software Engineering', 'Telecommunications Engineering']

            final_res = {label: f'{prob}%' for label, prob in zip(labels_eng, predicted_results_eng)}
            #print(final_res)
            final_res = dict(sorted(final_res.items(), key=lambda x: x[1], reverse=True)[:5])
            #print(final_res)

            final_res=list(final_res.keys())
            print(final_res)
        
        # for medical
        elif btn==1:
            results_med=self.new_trained_med_model(values_array)
            print(results_med)     
    
            labels_med=['Biotechnology', 'D-Pharmacy',
            'MBBS',
            'Medical Technology',
            'Nutrition Sciences']

            final_res = {label: f'{prob}%' for label, prob in zip(labels_med, results_med)}
            #print(final_res)
            final_res = dict(sorted(final_res.items(), key=lambda x: x[1], reverse=True)[:3])
            #print(final_res)

            final_res=list(final_res.keys())
            print(final_res)

        # for both
        elif btn==2:
            predicted_results_eng=self.new_trained_eng_model(values_array) 
            predicted_results_med=self.new_trained_med_model(values_array) 
        
            labels1=['Biomedical Engineering', 'Chemical Engineering',
            'Civil Engineering',
            'Computer and Information Systems Engineering',
            'Electrical Engineering', 'Mechanical Engineering',
            'Software Engineering', 'Telecommunications Engineering']

            final_res1 = {label: f'{prob}%' for label, prob in zip(labels1, predicted_results_eng)}
            #print(final_res)
            final_res1 = dict(sorted(final_res1.items(), key=lambda x: x[1], reverse=True)[:5])
            #print(final_res)

            labels2=['Biotechnology', 'D-Pharmacy',
            'MBBS',
            'Medical Technology',
            'Nutrition Sciences']

            final_res2 = {label: f'{prob}%' for label, prob in zip(labels2, predicted_results_med)}
            #print(final_res)
            final_res2 = dict(sorted(final_res2.items(), key=lambda x: x[1], reverse=True)[:3])
            #print(final_res)

            final_res = {}
            final_res.update(final_res1)
            final_res.update(final_res2)
            #print(final_res)
            final_res = dict(sorted(final_res.items(), key=lambda x: float(x[1][:-1]), reverse=True))

          

            final_res=list(final_res.keys())
            #print(final_res)


        return final_res

    @transaction.atomic
    def post(self, request, *args, **kwargs):
        data = request.data.copy()

        #preprocessed=self.preprocessing(data)
        preprocessed=self.preprocessing(data)

        #print("Preprocessed: ", preprocessed)

        btn = preprocessed['button']

        test_data = preprocessed.copy()
        #test_data.pop("button")

        #print("Test Data: ", test_data)

        #preprocessed_data = self.preprocessing( data['answers'] )
        #preprocessed_data = data

        score = self.prediction(test_data)

        # example preprocessed data for testing purpose
        # for engineering
        if btn==0:
            preprocessed_data = {
            'user': request.user.id,
            'gender': preprocessed['gender'],
            'income_group':preprocessed['income_group'],
            'sensing':preprocessed['sensing'],
            'introvert': preprocessed['introvert'],
            'Judging': preprocessed['Judging'],
            'Thinking':preprocessed['Thinking'],
            'logical_intelligence': preprocessed['logical_intelligence'],
            'Nature_intelligence': preprocessed['Nature_intelligence'],
            'Visual_intelligence': preprocessed['Visual_intelligence'],
            'Musical_intelligence': preprocessed['Musical_intelligence'],
            'Body_intelligence': preprocessed['Body_intelligence'],
            'Interpersonal_intelligence': preprocessed['Interpersonal_intelligence'],
            'Intrapersonal_intelligence': preprocessed['Intrapersonal_intelligence'],
            'Verbal_intelligence': preprocessed['Verbal_intelligence'],
            'Existential_intelligence': preprocessed['Existential_intelligence'],
            'Engineering_Field1': score[0],
            'Engineering_Field2': score[1],
            'Engineering_Field3': score[2],
            'Engineering_Field4': score[3],
            'Engineering_Field5': score[4],
            'Medical_Field1': 0,
            'Medical_Field2': 0,
            'Medical_Field3': 0,
            'button': 0
        }
            
        # for medical
        elif btn==1:
            preprocessed_data = {
            'user': request.user.id,
            'gender': preprocessed['gender'],
            'income_group':preprocessed['income_group'],
            'sensing':preprocessed['sensing'],
            'introvert': preprocessed['introvert'],
            'Judging': preprocessed['Judging'],
            'Thinking':preprocessed['Thinking'],
            'logical_intelligence': preprocessed['logical_intelligence'],
            'Nature_intelligence': preprocessed['Nature_intelligence'],
            'Visual_intelligence': preprocessed['Visual_intelligence'],
            'Musical_intelligence': preprocessed['Musical_intelligence'],
            'Body_intelligence': preprocessed['Body_intelligence'],
            'Interpersonal_intelligence': preprocessed['Interpersonal_intelligence'],
            'Intrapersonal_intelligence': preprocessed['Intrapersonal_intelligence'],
            'Verbal_intelligence': preprocessed['Verbal_intelligence'],
            'Existential_intelligence': preprocessed['Existential_intelligence'],
            'Engineering_Field1': 0,
            'Engineering_Field2': 0,
            'Engineering_Field3': 0,
            'Engineering_Field4': 0,
            'Engineering_Field5': 0,
            'Medical_Field1': score[0],
            'Medical_Field2': score[1],
            'Medical_Field3': score[2],
            'button': 1
        }
        
        # for both
        elif btn==2:
            preprocessed_data = {
            'user': request.user.id,
            'gender': preprocessed['gender'],
            'income_group':preprocessed['income_group'],
            'sensing':preprocessed['sensing'],
            'introvert': preprocessed['introvert'],
            'Judging': preprocessed['Judging'],
            'Thinking':preprocessed['Thinking'],
            'logical_intelligence': preprocessed['logical_intelligence'],
            'Nature_intelligence': preprocessed['Nature_intelligence'],
            'Visual_intelligence': preprocessed['Visual_intelligence'],
            'Musical_intelligence': preprocessed['Musical_intelligence'],
            'Body_intelligence': preprocessed['Body_intelligence'],
            'Interpersonal_intelligence': preprocessed['Interpersonal_intelligence'],
            'Intrapersonal_intelligence': preprocessed['Intrapersonal_intelligence'],
            'Verbal_intelligence': preprocessed['Verbal_intelligence'],
            'Existential_intelligence': preprocessed['Existential_intelligence'],
            'Engineering_Field1': score[0],
            'Engineering_Field2': score[1],
            'Engineering_Field3': score[2],
            'Engineering_Field4': score[3],
            'Engineering_Field5': score[4],
            'Medical_Field1': score[5],
            'Medical_Field2': score[6],
            'Medical_Field3': score[7],
            'button': 2
        }

        serializer = self.get_serializer(data=preprocessed_data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=201, headers=headers)

class ScoreListView(ListAPIView):
    serializer_class = ScoreSerializer2
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        queryset = Score.objects.filter(user=user).values(
        'Engineering_Field1', 'Engineering_Field2', 'Engineering_Field3',
        'Engineering_Field4', 'Engineering_Field5', 'Medical_Field1',
        'Medical_Field2', 'Medical_Field3','button'
        )
        print(queryset)
        return queryset
    

    