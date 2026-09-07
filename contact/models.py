from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=250)
    last_name = models.CharField(max_length=250)
    email = models.EmailField()
    content = models.TextField(blank=False)
    answer = models.TextField(blank=True, null=True)
    done = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Contatto"
        verbose_name_plural = "Contatti"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} {self.last_name} ({self.email})"
