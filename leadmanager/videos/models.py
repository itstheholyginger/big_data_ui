# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Categories(models.Model):
    videoid = models.TextField(db_column='videoID', blank=True)  # Field name made lowercase.
    category = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Categories'


class Pagerank(models.Model):
    videoid = models.TextField(db_column='videoID', primary_key=True)  # Field name made lowercase. This field type is a guess.
    pagerank = models.TextField(blank=True, null=True)  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'PageRank'


class Ranking(models.Model):
    videoid = models.TextField(db_column='videoID', primary_key=True, blank=True)  # Field name made lowercase.
    inrank = models.IntegerField(db_column='inRank')  # Field name made lowercase.
    outrank = models.IntegerField(db_column='outRank')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Ranking'


class Relatedids(models.Model):
    videoid = models.TextField(db_column='videoID', blank=True)  # Field name made lowercase.
    relatedid = models.TextField(db_column='relatedID', blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'RelatedIds'


class Updatevideo(models.Model):
    videoid = models.TextField(db_column='videoID', primary_key=True, blank=True)  # Field name made lowercase.
    views = models.IntegerField(blank=True, null=True)
    rate = models.FloatField(blank=True, null=True)
    ratings = models.IntegerField(blank=True, null=True)
    comments = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'UpdateVideo'


class User(models.Model):
    userid = models.TextField(db_column='UserID', primary_key=True, blank=True)  # Field name made lowercase.
    uploads = models.IntegerField(blank=True, null=True)
    watches = models.IntegerField(blank=True, null=True)
    friends = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'User'


class Video(models.Model):
    videoid = models.TextField(db_column='videoID', blank=True)  # Field name made lowercase.
    uploader = models.TextField(blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    length = models.IntegerField(blank=True, null=True)
    views = models.IntegerField(blank=True, null=True)
    rate = models.FloatField(blank=True, null=True)
    ratings = models.IntegerField(blank=True, null=True)
    comments = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Video'


class Videorate(models.Model):
    videoid = models.TextField(db_column='videoID', primary_key=True, blank=True)  # Field name made lowercase.
    vbr = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'VideoRate'


class Videosize(models.Model):
    videoid = models.TextField(db_column='videoID', primary_key=True, blank=True)  # Field name made lowercase.
    size = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'VideoSize'


class Videosizerate(models.Model):
    videoid = models.TextField(db_column='videoID', primary_key=True, blank=True)  # Field name made lowercase.
    size = models.IntegerField(blank=True, null=True)
    vbr = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'VideoSizeRate'
