import requests
from celery import shared_task

from urls.models import Link


@shared_task(bind=True)
def check_link(self, *args, **kwargs):
    links = Link.objects.all()
    for i in links:
        try:
            r = requests.get(i.url).status_code
            i.status_code = r
            i.save()
        except:
            i.status_code = 'fail'
            i.save()