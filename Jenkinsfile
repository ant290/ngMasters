pipeline {
    agent { docker { image 'node:6.3' } }
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