USE employees;

INSERT INTO department (name)
VALUES
('Assembly'),
('Logistics'),
('Shipping and Receiving'),
('Inventory')
;

INSERT INTO role (title, salary, department_id)
VALUES
("Assembly Manager", 40000, 1),
("S&R Manager", 40000, 3),
("Inventory Manager", 41000, 4),
("Logistics Manager", 43000, 2),
("General Assembly", 30000, 1),
("Inventory Rep", 36000, 4),
("Forklift Driver", 33000, 3),
("Logistics Rep", 36000, 2)
;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Clarissa", "Mccabe", 1, Null),
("Jevan", "English", 2, Null),
("Leyla", "Rivas",3,Null),
("Rui", "Meadows",4,Null),
("Romana", "Ahmad", 5, 1),
("Tye", "Conrad", 6, 4),
("Veronica", "Werner", 7, 2),
("Jermaine", "Woolley", 8, 4);