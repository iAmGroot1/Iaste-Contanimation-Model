#Assuming the os is either linux or maxOS or Windows 

import os 
import platform

if platform.system() == "Linux" or platform.system()=="Darwin":
    os.system('python-backend/venc/bin/python3 python-backend/hello.py')
elif platform.system() == "Windows":
    os.system('python-backend\venc\bin\python3 python-backend\hello.py')
else :
    print("OS not supported")

# if (platform.system().startswith =) :
#     os.system('python-backend/venc/bin/python3 python-backend/hello.py')
# else :
#     os.system()