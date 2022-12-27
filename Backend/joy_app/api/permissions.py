from rest_framework import permissions


class CreatorOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        return (
                request.method in permissions.SAFE_METHODS
                or request.user.is_authenticated
            )

    def has_object_permission(self, request, view, obj):
        return obj.creator == request.user


class ReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.method in permissions.SAFE_METHODS    


class UserOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        return (
                request.method in permissions.SAFE_METHODS
                or request.user.is_authenticated
            )

    def has_object_permission(self, request, view, obj):
        return obj.username == request.user.username
