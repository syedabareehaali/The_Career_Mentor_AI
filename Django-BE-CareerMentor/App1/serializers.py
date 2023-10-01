from rest_framework import serializers
from .models import User, Score

# # User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# # Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'country', 'city')
        extra_kwargs = {'password': {'write_only': True, 'min_length': 5}}

    def create(self, validated_data):
        return User.objects.create_user(
            validated_data['username'], 
            validated_data['email'], 
            validated_data['password'],
            validated_data['country'], 
            validated_data['city']
            )


class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = '__all__'
        #fields = ['Engineering_Field1', 'Engineering_Field2', 'Engineering_Field3',
                 # 'Engineering_Field4', 'Engineering_Field5', 'Medical_Field1',
                  #'Medical_Field2', 'Medical_Field3']

class ScoreSerializer2(serializers.ModelSerializer):
    class Meta:
        model = Score
        #fields = '__all__'
        fields = ['Engineering_Field1', 'Engineering_Field2', 'Engineering_Field3',
                  'Engineering_Field4', 'Engineering_Field5', 'Medical_Field1',
                  'Medical_Field2', 'Medical_Field3','button']
        
class ScoreSerializer3(serializers.ModelSerializer):
    class Meta:
        model = Score
        #fields = '__all__'
        fields = ['gender', 'income_group', 'sensing','introvert','Judging','Thinking',
                  'logical_intelligence', 'Nature_intelligence', 'Visual_intelligence',
                  'Musical_intelligence', 'Body_intelligence','Interpersonal_intelligence',
                  'Intrapersonal_intelligence','Verbal_intelligence','Existential_intelligence',
                  ]
        

       
