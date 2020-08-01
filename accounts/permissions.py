from rest_framework import permissions

class AnonyCreateAndUpdateOWnOnly(permissions.BasePermission):
    
    def has_permission(self, request, view):
        return request.method == "POST" or request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        return (
                request.method in ["GET", "PUT", "PATCH"] and obj.id == request.user.id or request.usser.is_staff
        )

