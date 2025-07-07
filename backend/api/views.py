from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_coins(request):
    return Response({"coins": 100})

@api_view(['POST'])
def update_coins(request):
    coins = int(request.data.get("coins", 100))
    cost = int(request.data.get("cost", 0))
    coins -= cost
    return Response({"coins": coins})