import os
import secrets

import pendulum

from django.conf import settings

def now() -> pendulum.DateTime:
    return pendulum.now(tz=settings.TIME_ZONE)

def create_upload_path(instance, filename):
    prefix = getattr(instance, 'FILE_UPLOAD_PATH', 'etc')
    upload_date = now().to_date_string()
    generated_filename = secrets.token_urlsafe(nbytes=16)
    ext = os.path.splitext(filename)[1]

    return "/".join([prefix, upload_date, generated_filename, ext])