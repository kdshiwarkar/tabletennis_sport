pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            } 
        }
        stage('Build') {
            steps {
                sh 'mvn install'
            }
        }
        stage('Deployment') {
            steps {
                sh 'mkdir -p /home/kunalshiwarkar/.jenkins/workspace/tabletennis_sport'
                sh 'cp target/tabletennis_sport.war /home/kunalshiwarkar/.jenkins/workspace/tabletennis_sport/tabletennis_sport.war'
            }
        }
        stage('docker build') {
            steps {
                sh 'docker build -t kunalsh/kunal_image25 .'
            }
        }
        stage('tag to given image') {
            steps {
                sh 'docker tag kunalsh/kunal_image25 docker.io/kunalsh/kunal_image25:latest'
            }
        } 
        stage ('docker login') {
            steps {
                sh 'docker login  docker.io -u kunalsh -p Kunnu@2404 '
            }
        }
        stage('Push to Docker Hub') {
           steps {
              sh 'docker push docker.io/kunalsh/kunal_image25:latest'
         }
        }
      
        stage('Container creation') {
            steps {
                sh 'docker run -it -d --name=kunalcont2404 -p 1307:8080 docker.io/kunalsh/kunal_image25:latest /bin/bash'
            }
        }
        
         stage('Copy war file to container') {
            steps {
              sh 'docker cp /home/kunalshiwarkar/.jenkins/workspace/tabletennis_sport/tabletennis_sport.war kunalcont2404:/opt/download/apache-tomcat-9.0.93/webapps'
         }
        }    
    }
}
