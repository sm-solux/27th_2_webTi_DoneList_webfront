from django.contrib import admin
from .models import Member, DoneList, Like, DM, Comment

# Register your models here.


admin.site.register(Member)
admin.site.register(DoneList)
admin.site.register(Like)
admin.site.register(DM)
admin.site.register(Comment)
