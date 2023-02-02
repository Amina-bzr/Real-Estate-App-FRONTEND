from django.contrib.auth.models import User, Group
from .models import Annonce, Offre, Contact, Photo
from rest_framework import serializers


class ContactSerializer(serializers.HyperlinkedModelSerializer):
    utilisateur = serializers.CharField(
        source='utilisateur.username', required=False)
    id = serializers.ReadOnlyField()

    class Meta:
        model = Contact
        fields = "__all__"


class UserSerializer(serializers.HyperlinkedModelSerializer):
    contact = ContactSerializer(many=False)

    class Meta:
        model = User
        fields = ['contact', 'username', 'first_name', 'last_name', 'email']

    def create(self, validated_data):
        Contact_data = validated_data.pop('contact')
        user = User.objects.create(**validated_data)
        Contact.objects.create(utilisateur=user, **Contact_data)
        return user

    ''' def update(self, instance, validated_data):
        contact_data = validated_data.pop('contact')
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        contact.name = contact_data.get('name', contact.name)
        contact.release_date = contact_data.get('release_date', contact.release_date)
        contact.num_stars = contact_data.get('num_stars', contact.num_stars)
        contact.save()
        return instance
 '''


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class OffreSerializer(serializers.HyperlinkedModelSerializer):
    utilisateur = serializers.CharField(
        source='utilisateur.username', required=False)
    annonce = serializers.HyperlinkedRelatedField(
        view_name='annonce-detail', read_only=True)
    id = serializers.ReadOnlyField()

    class Meta:
        model = Offre
        fields = "__all__"


class PhotoSerializer(serializers.HyperlinkedModelSerializer):
    photo = serializers.ImageField()
    id = serializers.ReadOnlyField()

    class Meta:
        model = Photo
        fields = "__all__"


class AnnonceSerializer(serializers.HyperlinkedModelSerializer):
    annonceur = serializers.CharField(
        source='annonceur.username', required=False)
    offres = serializers.HyperlinkedRelatedField(
        many=True, view_name="offre-detail", read_only=True)
    photos = serializers.HyperlinkedRelatedField(
        many=True, view_name='photo-detail', read_only=True)
    id = serializers.ReadOnlyField()

    class Meta:
        model = Annonce
        fields = "__all__"
