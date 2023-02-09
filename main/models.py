from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.


class Member(models.Model):
    userId = models.CharField(max_length=20, primary_key=True)
    Nickname = models.CharField(max_length=20, unique=True)
    Password = models.CharField(max_length=30)
    Year = models.IntegerField(validators = [MinValueValidator(1199), MaxValueValidator(2199)])
    def __str__(self):
        return self.userId

    class Meta:
        db_table = 'Member'



class DoneList(models.Model):
    _id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30)
    startDate = models.DateField('%Y.%m.')
    finishDate = models.DateField('%Y.%m.')
    Whatis = models.TextField(max_length=2000)
    Whatdid = models.TextField(max_length=2000)
    Episode = models.TextField(max_length=2000)
    Major = models.CharField(max_length = 20)
    Activity = models.CharField(max_length = 20)
    Colorcode = models.CharField(max_length=8)
    userId = models.ForeignKey(to='main.Member', on_delete= models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'DoneList'

class Like(models.Model):
    _id = models.AutoField(primary_key=True)
    userId = models.ForeignKey(to='main.Member', on_delete=models.CASCADE)
    doneId = models.ForeignKey(to='main.DoneList', on_delete=models.CASCADE)

    def __str__(self):
        return self.userId

    class Meta:
        db_table = 'Like'


class Comment(models.Model):
    _id = models.AutoField(primary_key=True)
    userId = models.ForeignKey(to='main.Member', on_delete=models.CASCADE)
    doneId = models.ForeignKey(to='main.DoneList', on_delete=models.CASCADE) 
    comment = models.TextField(max_length=1000)

    def __str__(self):
        return self.comment

    class Meta:
        db_table = 'comment'


    
class DM(models.Model):
    _id = models.AutoField(primary_key=True)

    sendId = models.ForeignKey(to='main.Member', on_delete=models.CASCADE, related_name='send')
    receiveId = models.ForeignKey(to='main.Member', on_delete=models.CASCADE, related_name='receive')
    message = models.TextField(max_length=1000)
    doneId = models.ForeignKey(to='DoneList', on_delete=models.CASCADE)
    time = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.sendId

    class Meta:
        db_table = 'DM'





