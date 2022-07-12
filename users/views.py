import requests
from django.contrib.auth import login, authenticate
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from urls.models import Link
from django_celery_beat.models import CrontabSchedule, PeriodicTask, IntervalSchedule


def auth(request):
    if request.is_ajax():
        username = request.POST['username'].lower()
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
        else:
            return HttpResponse(status=400)
    return render(request, 'auth.html')


def list(request):
    if request.user.is_authenticated:
        links = Link.objects.filter(check=True)
        if request.is_ajax():
            if request.POST['interval'] == 'true':
                print("_____________________________________")
                schedule, created = IntervalSchedule.objects.get_or_create(every=request.POST['number_of_periods'], period=IntervalSchedule.SECONDS)
                print(schedule)
                PeriodicTask.objects.create(interval=schedule, task='urls.tasks.check_link')
            else:
                res = []
                for i in links:
                    try:
                        res.append(requests.get(i.url, verify=False).status_code)
                    except:
                        pass
                return JsonResponse({'res': res})
    else:
        return redirect('auth')
    return render(request, 'list.html', locals())
