FROM ubuntu:latest

MAINTAINER kdshiwarkar@gmail.com

# Create directory 
WORKDIR /opt/download/

# Update package list and upgrade
RUN apt-get update && apt-get -y upgrade

# Install required packages
RUN apt-get install -y git vim wget

# Download and extract Tomcat, Maven, and Java
RUN wget https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.91/bin/apache-tomcat-9.0.91.tar.gz && \
    tar -xvf apache-tomcat-9.0.91.tar.gz && \
    rm apache-tomcat-9.0.91.tar.gz

RUN wget https://dlcdn.apache.org/maven/maven-3/3.9.8/binaries/apache-maven-3.9.8-bin.tar.gz && \
    tar -xvf apache-maven-3.9.8-bin.tar.gz && \
    rm apache-maven-3.9.8-bin.tar.gz

RUN wget https://download.oracle.com/java/22/latest/jdk-22_linux-x64_bin.tar.gz && \
    tar -xvf jdk-22_linux-x64_bin.tar.gz && \
    rm jdk-22_linux-x64_bin.tar.gz

# Set environment variables
ENV JAVA_HOME /opt/download/jdk-22.0.2
ENV M2_HOME /opt/download/apache-maven-3.9.8
ENV PATH=$JAVA_HOME/bin:$M2_HOME/bin:$PATH

# Create webapps directory
RUN mkdir -p /opt/download/apache-tomcat-9.0.91/webapps

# Expose port 8080
EXPOSE 8080

# Start Tomcat on container startup
CMD ["/opt/download/apache-tomcat-9.0.91/bin/startup.sh"]
