from rest_framework import permissions

class IsMessStaff(permissions.BasePermission):
    """
    Custom permission to only allow mess staff to access certain views.
    """
    def has_permission(self, request, view):
        # Check if the user is authenticated and has the 'mess_staff' role
        return request.user.is_authenticated and request.user.is_mess_staff
    