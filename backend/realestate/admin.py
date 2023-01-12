from django.contrib import admin
from .models import Annonce, Offre, Contact, Photo


# Register your models here.
admin.site.register(Offre),
admin.site.register(Contact),
admin.site.register(Photo),


class AnnonceAdmin(admin.ModelAdmin):
    def get_changeform_initial_data(self, request):
        get_data = super(
            AnnonceAdmin, self).get_changeform_initial_data(request)
        get_data['annonceur'] = request.user.pk
        return get_data


admin.site.register(Annonce, AnnonceAdmin)
