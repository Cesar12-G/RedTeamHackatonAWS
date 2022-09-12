def currentDataBase(isAWSDebug, baseDir):
    objToReturn = {}
    if not isAWSDebug:
        objToReturn = {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': baseDir / 'db.sqlite3',
            }
        }
    else:
        objToReturn = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'ebdb',
            'USER': 'db_user',
            'PASSWORD': 'db_pwd',
            'HOST': '',
            'PORT': '3306',
        }
    }
    return objToReturn