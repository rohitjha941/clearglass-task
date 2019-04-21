from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import  status 
import datetime 
class APIs(APIView):
    def get(self,request):
        data = {
            "message": "All systems are operational",
            "ping" : str(datetime.datetime.now())
        }
        return Response( data = data, status=status.HTTP_200_OK)

