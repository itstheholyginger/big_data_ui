from rest_framework import serializers
from .models import *

# Lead Serializer
class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'


class PageRankSerializer(serializers.ModelSerializer):
    class Meta:
        model: Pagerank
        fields: '__all__'


class RankingSerializer(serializers.ModelSerializer):
    class Meta:
        model: Ranking
        fields: '__all__'


class RelatedIdsSerializer(serializers.ModelSerializer):
    class Meta:
        model: Relatedids
        fields: '__all__'


class UpdatedVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model: Updatevideo
        fields: '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model: User
        fields: '__all__'


class VideoRateSerializer(serializers.ModelSerializer):
    class Meta:
        model: Videorate
        fields: '__all__'


class VideoSizeSerializer(serializers.ModelSerializer):
    class Meta:
        model: Videosize
        fields: '__all__'


class VideoSizeRateSerializer(serializers.ModelSerializer):
    class Meta:
        model: Videosizerate
        fields: '__all__'