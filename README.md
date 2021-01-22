# Iaste-Contanimation-Model
A platform which determines the contanimation of a particular region 

## System Requirements :
1. Node.js : v10.19.0 or higher
2. npm : v6.14.4 or higher
3. pip : v20.0.2 or higher
4. python : v3.8 or higher

## Optional Requirements :
1. virtualenv(python) : v8.30  --- 

## Instruction to download and run on desktop
1. First clone and install all the files on the required desktop
2. Run the code below to install the node dependencies:
```
npm install
```
3. Go inside 'python-backend' and run the code below if virtualenv is installed :
```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
4. If virtualenv is not installed then pip will install the packages globally. To do this run the following code:
```
pip install -r requirements.txt
```
5. An error may show up but all the required packages will already be installed successfully.
6. To run the server without connecting to database go back to the main directory and run :
```
deactivate
npm run fast-start
```
