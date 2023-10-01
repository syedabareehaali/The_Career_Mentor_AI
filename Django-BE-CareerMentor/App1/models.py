from django.db import models
from django.contrib.auth.models import AbstractUser


from django.contrib.auth.models import AbstractUser, UserManager as DefaultUserManager
from django.db import models


class UserManager(DefaultUserManager):
    def create_user(self, username, email, password, country, city, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        
        if extra_fields.get('is_staff') is not True:
            extra_fields['is_staff'] = False
        
        if extra_fields.get('is_superuser') is not True:
            extra_fields['is_superuser'] = False
        
        return self._create_user(username, email, password, country, city, **extra_fields)

    def _create_user(self, username, email, password, country, city, **extra_fields):
        if not username:
            raise ValueError('The Username field must be set')
        
        if not email:
            raise ValueError('The Email field must be set')
        
        email = self.normalize_email(email)
        username = self.model.normalize_username(username)
        
        user = self.model(username=username, email=email, country=country, city=city, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        
        return user


class User(AbstractUser):
    # Add your custom fields here
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)

    objects = UserManager()

    def __str__(self):
        return self.username


class Score(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    gender = models.IntegerField()
    income_group = models.IntegerField()
    sensing= models.FloatField()
    introvert= models.FloatField()
    Judging= models.FloatField()
    Thinking= models.FloatField()
    logical_intelligence= models.FloatField()
    Nature_intelligence= models.FloatField()
    Visual_intelligence= models.FloatField()
    Musical_intelligence= models.FloatField()
    Body_intelligence= models.FloatField()
    Interpersonal_intelligence= models.FloatField()
    Intrapersonal_intelligence= models.FloatField()
    Verbal_intelligence= models.FloatField()
    Existential_intelligence= models.FloatField()
    Engineering_Field1=models.CharField(max_length=200)
    Engineering_Field2=models.CharField(max_length=200)
    Engineering_Field3=models.CharField(max_length=200)
    Engineering_Field4=models.CharField(max_length=200)
    Engineering_Field5=models.CharField(max_length=200)
    Medical_Field1=models.CharField(max_length=200)
    Medical_Field2=models.CharField(max_length=200)
    Medical_Field3=models.CharField(max_length=200)
    button = models.FloatField()

    # def __str__(self):
    #     return f"Score: {self.score}"

    def _str_(self):
        #return f"Score: {self.user}"
        return (
        f"Gender: {self.gender}, Income Group: {self.income_group}, "
        f"Sensing: {self.sensing}, Introvert: {self.introvert}, Judging: {self.Judging}, Thinking: {self.Thinking}, "
        f"Logical Intelligence: {self.logical_intelligence}, Nature Intelligence: {self.Nature_intelligence}, "
        f"Visual Intelligence: {self.Visual_intelligence}, Musical Intelligence: {self.Musical_intelligence}, "
        f"Body Intelligence: {self.Body_intelligence}, Interpersonal Intelligence: {self.Interpersonal_intelligence}, "
        f"Intrapersonal Intelligence: {self.Intrapersonal_intelligence}, Verbal Intelligence: {self.Verbal_intelligence}, "
        f"Existential Intelligence: {self.Existential_intelligence}"
    )