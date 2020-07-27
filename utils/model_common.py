import os

from django.db import models
from .utils import create_upload_path

class FileMetaMixin(models.Model):
    FILE_UPLOAD_PATH = 'etc'

    file_name = models.CharField(max_length=128, null=True, help_text="첨부파일 이름")
    file_ext = models.CharField(max_length=16, null=True, help_text="첨부파일 확장자")
    file_size = models.PositiveIntegerField(default=0, null=True, help_text="파일 크기")

    class Meta:
        abstract = True

    def save(self, force_insert=False, force_update=False, using=None, update_fileds=None):
        if getattr(self, 'file', None):
            file_name, self.file_ext = os.path.splitext(self.file.file.name)
            self.file_size = int(self.file.file.size)
            
            if file_name:
                if "." in file_name:
                    self.file_name = os.path.splitext(file_name)[0]
            else:
                self.file_name = file_name
        
        super(FileMetaMixin, self).save(force_insert=force_insert, force_update=force_update, using=using, update_fields=update_fileds)

class FileMixin(FileMetaMixin):
    file = models.FileField(upload_to=create_upload_path, null=True, help_text="첨부 파일")

    class Meta:
        abstract = True

class ImageMixin(FileMetaMixin):
    file = models.ImageFiled(upload_to=create_upload_path, null=True, help_text="첨부 이미지")

    class Meta:
        abstract = True