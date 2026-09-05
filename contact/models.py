from django.db import models

# Create your models here.

class Contact(models.Model):
  name = models.CharField(max_length = 250)
  last_name = models.CharField(max_length = 250)
  email = models.EmailField()
  content = models.TextField(blank = False)
  answer = models.TextField(blank = True)
  done = models.BooleanField(default = False)
  
  def __str__(self):
    return self.name + ' ' + self.last_name + ' - ' + self.email
