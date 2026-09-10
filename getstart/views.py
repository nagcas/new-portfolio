from django.conf import settings
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class GetStart(APIView):
    """
    GET /api/start/

    Public health check endpoint.
    """

    authentication_classes = []
    permission_classes = []

    def get(self, request):
        try:
            api_info = {
                'author': 'Gianluca Chiaravalloti',
                'version': '1.0.1',
                'date': '2026.09.10',
                'description': (
                    'Health check endpoint for the portfolio API, '
                    'used to verify that the API is running.'
                ),
                'project': 'Gianluca Chiaravalloti — Portfolio API',
                'documentation': ('https://github.com/nagcas/new-portfolio'),
                'contact': 'studio.nagcas@outlook.it',
                'web': 'https://portfolio-gianluca-phi.vercel.app/',
                'status': 'stable',
                'environment': settings.ENVIRONMENT,
            }

            return Response(
                {
                    'success': True,
                    'code': 200,
                    'status': 'success',
                    'message': 'Server started successfully',
                    'payload': api_info,
                },
                status=status.HTTP_200_OK,
            )

        except Exception as error:

            return Response(
                {
                    'success': False,
                    'code': 500,
                    'status': 'error',
                    'message': 'Unexpected error while starting the server',
                    'payload': None,
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
