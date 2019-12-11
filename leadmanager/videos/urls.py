from rest_framework import routers
from .api import VideoViewSet, RankingViewSet;

router = routers.DefaultRouter()
router.register("api/videos", VideoViewSet)
router.register("api/ranking", RankingViewSet)

urlpatterns = router.urls
