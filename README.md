# Iaste-Contanimation-Model
A platform which determines the contanimation of a particular region (In progress)

## System Requirements :
1. Node.js : v10.19.0 or higher
2. npm : v6.14.4 or higher
3. pip : v20.0.2 or higher
4. python : v3.8 or higher

## Optional Requirements :
1. virtualenv(python) : v8.30  --- To install the python packages in a virtual environment rather than globally

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
7. This code is tested on linux so couple of things need attention :
  * If the code doesnt work on windows or macOS then the problem is in main.py file and the syntax of path might not be correct
  * If connection to database is required then in config folder changes need to done to the mongoURI
  * To run the server connected to the database run ```npm start```
  * The routes/api is for the REST API use so can be modified depending on the required task

