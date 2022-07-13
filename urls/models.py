from django.db import models


class Link(models.Model):
    url = models.CharField(max_length=255)
    check = models.BooleanField(default=True)
    status_code = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.url