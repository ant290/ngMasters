pipeline {
    agent { 
        docker { 
            image 'node:6.3'
            //args '-p 3000:3000'
        } 
    }
	//agent any
    //agent { label 'master' }
    stages {
        stage('build') {
            steps {
                echo "Hello World!"
                //bat 'npm --version'
            }
        }
    }
}