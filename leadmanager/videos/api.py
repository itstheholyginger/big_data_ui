from .models import *
from rest_framework import viewsets, permissions
from .serializers import *

# Video Viewset


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VideoSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CategorySerializer


class PageRankViewSet(viewsets.ModelViewSet):
    queryset = Pagerank.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PageRankSerializer


class RankingViewSet(viewsets.ModelViewSet):
    queryset = Ranking.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RankingSerializer


class RelatedIdsViewSet(viewsets.ModelViewSet):
    queryset = Relatedids.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RelatedIdsSerializer


class UpDateVideoViewSet(viewsets.ModelViewSet):
    queryset = Updatevideo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UpdatedVideoSerializer


class VideoRateViewSet(viewsets.ModelViewSet):
    queryset = Videorate.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VideoRateSerializer


class VideoSizeViewSet(viewsets.ModelViewSet):
    queryset = Videosize.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VideoSizeSerializer


class VideoSizeRateViewSet(viewsets.ModelViewSet):
    queryset = Videosizerate.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VideoSizeRateSerializer