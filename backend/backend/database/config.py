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
            'HOST': 'awseb-e-7mmv9yybhu-stack-awsebrdsdatabase-wmz8jxn8arns.clwsyhsmiw5s.us-west-2.rds.amazonaws.com',
            'PORT': '3306',
        }
    }
    return objToReturn