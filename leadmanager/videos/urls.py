from rest_framework import routers
from .api import VideoViewSet

router = routers.DefaultRouter()
router.register("api/videos", VideoViewSet)

urlpatterns = router.urls
