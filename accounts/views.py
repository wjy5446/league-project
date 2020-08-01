from rest_framework import status
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import User
from .serializers import UserSerializer
from .permissions import AnonyCreateAndUpdateOWnOnly

class UserAPIView(APIView):
    permission_classes = [AnonyCreateAndUpdateOWnOnly]
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):

        permission_classes = [permissions.AllowAny]
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def get(self, request, format=None):

        serializer = self.serializer_class(request.user)

        return Response(serializer.data)

    def patch(self, request, format=None):

        user = User.objects.filter(id=request.user.id).first()
        serializer = self.serializer_class(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def delete(self, request):
        
        request.user.is_active = False
        request.user.save()

        return Response("{}님이 비활성화 되었습니다.".format(request.user.username))


