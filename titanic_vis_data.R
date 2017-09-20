getwd()
# load the data
Titanic <- read.csv("titanic_data.csv")

# load data wrangling library
library(dplyr)
# Let's check Survival Count by Class they boarded
Pclass_survival_count <- Titanic %>% group_by(Pclass, Survived) %>% 
  summarise(Count = length(Survived)) %>% ungroup() %>% as.data.frame()

write.csv(Pclass_survival_count, file = "Pclass_survival_count.csv", sep = " ", col.names = TRUE)

# Explore the survival by age group
range(Titanic$Age, na.rm = T)
Titanic$Age_grouped <- cut(Titanic$Age, 
                       breaks = c(0, 15, 30, 45, 60, 80), 
                       labels = c("0-15", "16-30", "31-45", "46-60", "60+"), 
                       right = FALSE)

Titanic <- Titanic[!is.na(Titanic$Age_grouped),]
table(Titanic$Age_grouped, Titanic$Survived)

Age_grouped_survival <- Titanic[!is.na(Titanic$Age_grouped) & Titanic$Survived==1,] %>% group_by(Age_grouped) %>% 
  summarise(n = n()) %>% mutate(freq_per = round(100*n/sum(n),2))
  ungroup() %>% as.data.frame()


write.csv(Age_grouped_survival, file = 'Age_grouped_survival.csv', sep = ",", col.names = TRUE)
sapply(Titanic, class)

# Who had better chance of survival, Travelling alone or with partners
alone = (Titanic[(Titanic['SibSp']==0) & (Titanic['Parch']==0)])
not_alone= (Titanic[(Titanic['SibSp']>0) | (Titanic['Parch']>0)])

alone_survived = (Titanic[((Titanic['SibSp']==0) & (Titanic['Parch']==0)) & Titanic['Survived']])
together_survived = (Titanic[((Titanic['SibSp']>0) | (Titanic['Parch']>0)) & Titanic['Survived']])

# get their survival percentage
percent_alone_survived = length(alone_survived)* 1.0/length(alone)*100
percent_together_survived = length(together_survived)* 1.0/length(not_alone)*100

# Save the file
Partner <- c('Alone', 'Together')
Survival_per <- c(30.35, 50.56)
Partner_Survival_Rate <- data.frame(Partner, Survival_per)
sapply(Partner_Survival_Rate, class)
write.csv(Partner_Survival_Rate, file = 'companion.csv', sep = ",", col.names = TRUE)
