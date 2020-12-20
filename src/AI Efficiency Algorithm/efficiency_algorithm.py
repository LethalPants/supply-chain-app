# -*- coding: utf-8 -*-
"""
Created on Sun Dec 20 04:12:36 2020

@author: athar
"""


import numpy as np
import pandas as pd
from anytree import NodeMixin, RenderTree, PreOrderIter
import random

from sklearn.linear_model import LinearRegression



def VaccinesReleased():
    return random.randint(5000,6000)
    
def vaccinesForNode(MyNode, total_vaccines, total_registered):
    return MyNode.importance_ratio * MyNode.Registered * total_vaccines / total_registered

class MyBaseClass(object):  # Just an example of a base class
    foo=0
        
    
class MyNode(MyBaseClass, NodeMixin):  # Add Node feature
        def __init__(self, name, parent=None, children=None):
            super(MyNode, self).__init__()
            self.name = name
            self.Supply = 0
            self.Actual_Demand = 0
            self.Predicted_Demand = 0
            self.Remaining = 0
            self.Registered = 50000
            self.importance_ratio =1
            self.Supplythatday = [0,1]
            self.SupplyHistory = [0,1]
            self.DemandHistory = [0,1]
            self.randpeeps = random.uniform(0.3, 1)
            
            self.parent = parent
            if children:
                self.children = children
                
        def Predict_Demand(self, random_factor, new_supply):
            self.Supply = new_supply
            regressor = LinearRegression()
            regressor.fit(np.reshape(np.asarray(self.SupplyHistory),(-1, 1)), np.reshape(np.asarray(self.DemandHistory),(-1, 1)))
            self.Predicted_Demand = regressor.predict(np.reshape(self.Supply, (1,1)))[0][0]
            
            self.Actual_Demand =self.Predicted_Demand * random_factor
            self.Registered -= self.Actual_Demand
            self.SupplyHistory.append(self.Actual_Demand)
            self.DemandHistory.append(self.Predicted_Demand)
            self.Supplythatday.append(self.Supply)
                
                
#Creating the Tree
marker0 = MyNode('marker0')
marker1 = MyNode('marker1', parent=marker0)
marker2 = MyNode('marker2', parent=marker0)
marker3 = MyNode('marker3', parent=marker2)
marker4 = MyNode('marker4', parent=marker1)
marker5 = MyNode('marker5', parent=marker2)
marker7 = MyNode('marker7', parent=marker1)
marker6 = MyNode('marker6', parent=marker7)
marker8 = MyNode('marker8', parent=marker1)
marker9 = MyNode('marker9', parent=marker0)
marker10 = MyNode('marker10', parent=marker9)
marker11 = MyNode('marker11', parent=marker0)
marker12 = MyNode('marker12', parent=marker0)
marker13 = MyNode('marker13', parent=marker0)
marker14 = MyNode('marker14', parent=marker0)
marker15 = MyNode('marker15', parent=marker0)
marker16 = MyNode('marker16', parent=marker14)
marker17 = MyNode('marker17', parent=marker0)
marker18 = MyNode('marker18', parent=marker17)
marker19 = MyNode('marker19', parent=marker17)
marker20 = MyNode('marker20', parent=marker17)
marker21 = MyNode('marker21', parent=marker19)
marker22 = MyNode('marker22', parent=marker17)
marker23 = MyNode('marker23', parent=marker22)
marker25 = MyNode('marker25', parent=marker22)
marker26 = MyNode('marker26', parent=marker22)
marker29 = MyNode('marker29', parent=marker0)
marker28 = MyNode('marker28', parent=marker29)
marker32 = MyNode('marker32', parent=marker1)
marker30 = MyNode('marker30', parent=marker32)
marker33 = MyNode('marker33', parent=marker28)
marker35 = MyNode('marker35', parent=marker32)
marker31 = MyNode('marker31', parent=marker35)
marker36 = MyNode('marker36', parent=marker18)
marker34 = MyNode('marker34', parent=marker36)
marker24 = MyNode('marker24', parent=marker36)
marker37 = MyNode('marker37', parent=marker25)
marker27 = MyNode('marker27', parent=marker36)
marker38 = MyNode('marker38', parent=marker22)
marker39 = MyNode('marker39', parent=marker22)


for pre, _, node in RenderTree(marker0):
        treestr = u"%s%s" % (pre, node.name)
        print(treestr.ljust(8))

#%%

def totalRegistered():
    sum =0
    for node in PreOrderIter(marker0):
        sum += node.Registered
    return sum
        

#Generating time series objects for each node by machine learning
def OneRun():
    total_vaccines = VaccinesReleased()
    total_registered = totalRegistered()
    for node in PreOrderIter(marker0):
        node.Predict_Demand(random.uniform(node.randpeeps, 1), vaccinesForNode(node, total_vaccines, total_registered))
        
OneRun()
    
#%%

for node in PreOrderIter(marker0):
        print(node.SupplyHistory)
        print(node.DemandHistory)
        print(node.Supplythatday)

#%%
#get the histories in the json object, we want supplythatday and supplyhistory

arr = []
for i in range(2, 12):
    arr2 = []
    arr2.append({"demand":marker0.SupplyHistory[i], "supply":marker0.Supplythatday[i]})
    arr2.append({"demand":marker1.SupplyHistory[i], "supply":marker1.Supplythatday[i]})
    arr2.append({"demand":marker2.SupplyHistory[i], "supply":marker2.Supplythatday[i]})
    arr2.append({"demand":marker3.SupplyHistory[i], "supply":marker3.Supplythatday[i]})
    arr2.append({"demand":marker4.SupplyHistory[i], "supply":marker4.Supplythatday[i]})
    arr2.append({"demand":marker5.SupplyHistory[i], "supply":marker5.Supplythatday[i]})
    arr2.append({"demand":marker6.SupplyHistory[i], "supply":marker6.Supplythatday[i]})
    arr2.append({"demand":marker7.SupplyHistory[i], "supply":marker7.Supplythatday[i]})
    arr2.append({"demand":marker8.SupplyHistory[i], "supply":marker8.Supplythatday[i]})
    arr2.append({"demand":marker9.SupplyHistory[i], "supply":marker9.Supplythatday[i]})
    arr2.append({"demand":marker10.SupplyHistory[i], "supply":marker10.Supplythatday[i]})
    arr2.append({"demand":marker11.SupplyHistory[i], "supply":marker11.Supplythatday[i]})
    arr2.append({"demand":marker12.SupplyHistory[i], "supply":marker12.Supplythatday[i]})
    arr2.append({"demand":marker13.SupplyHistory[i], "supply":marker13.Supplythatday[i]})
    arr2.append({"demand":marker14.SupplyHistory[i], "supply":marker14.Supplythatday[i]})
    arr2.append({"demand":marker15.SupplyHistory[i], "supply":marker15.Supplythatday[i]})
    arr2.append({"demand":marker16.SupplyHistory[i], "supply":marker16.Supplythatday[i]})
    arr2.append({"demand":marker17.SupplyHistory[i], "supply":marker17.Supplythatday[i]})
    arr2.append({"demand":marker18.SupplyHistory[i], "supply":marker18.Supplythatday[i]})
    arr2.append({"demand":marker19.SupplyHistory[i], "supply":marker19.Supplythatday[i]})
    arr2.append({"demand":marker20.SupplyHistory[i], "supply":marker20.Supplythatday[i]})
    arr2.append({"demand":marker21.SupplyHistory[i], "supply":marker21.Supplythatday[i]})
    arr2.append({"demand":marker22.SupplyHistory[i], "supply":marker22.Supplythatday[i]})
    arr2.append({"demand":marker23.SupplyHistory[i], "supply":marker23.Supplythatday[i]})
    arr2.append({"demand":marker24.SupplyHistory[i], "supply":marker24.Supplythatday[i]})
    arr2.append({"demand":marker25.SupplyHistory[i], "supply":marker25.Supplythatday[i]})
    arr2.append({"demand":marker26.SupplyHistory[i], "supply":marker26.Supplythatday[i]})
    arr2.append({"demand":marker27.SupplyHistory[i], "supply":marker27.Supplythatday[i]})
    arr2.append({"demand":marker28.SupplyHistory[i], "supply":marker28.Supplythatday[i]})
    arr2.append({"demand":marker29.SupplyHistory[i], "supply":marker29.Supplythatday[i]})
    arr2.append({"demand":marker30.SupplyHistory[i], "supply":marker30.Supplythatday[i]})
    arr2.append({"demand":marker31.SupplyHistory[i], "supply":marker31.Supplythatday[i]})
    arr2.append({"demand":marker32.SupplyHistory[i], "supply":marker32.Supplythatday[i]})
    arr2.append({"demand":marker33.SupplyHistory[i], "supply":marker33.Supplythatday[i]})
    arr2.append({"demand":marker34.SupplyHistory[i], "supply":marker34.Supplythatday[i]})
    arr2.append({"demand":marker35.SupplyHistory[i], "supply":marker35.Supplythatday[i]})
    arr2.append({"demand":marker36.SupplyHistory[i], "supply":marker36.Supplythatday[i]})
    arr2.append({"demand":marker37.SupplyHistory[i], "supply":marker37.Supplythatday[i]})
    arr2.append({"demand":marker38.SupplyHistory[i], "supply":marker38.Supplythatday[i]})
    arr2.append({"demand":marker39.SupplyHistory[i], "supply":marker39.Supplythatday[i]})
    arr.append(arr2)
    
print(arr)
    


