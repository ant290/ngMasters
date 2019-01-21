pipeline {
    agent { 
        docker { 
            image 'node:6-alpine'
            args '-w C:\\Users\\Anthony.Parker-Perry\\.jenkins\\workspace\\ngMasters-MultiBranch_master'
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