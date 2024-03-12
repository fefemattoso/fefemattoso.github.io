-- Criar Tabela de Categorias
CREATE TABLE Categorias (
    id_categoria INT PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL
);

-- Inserir Dados na Tabela de Categorias
INSERT INTO Categorias (id_categoria, nome_categoria) VALUES
(1, 'Bebidas Quentes'),
(2, 'Bebidas Frias'),
(3, 'Pratos Principais'),
(4, 'Sobremesas'),
(5, 'Aperitivos');

-- Criar Tabela de Ingredientes
CREATE TABLE Ingredientes (
    id_ingrediente INT PRIMARY KEY,
    nome_ingrediente VARCHAR(50) NOT NULL
);

-- Inserir Dados na Tabela de Ingredientes
INSERT INTO Ingredientes (id_ingrediente, nome_ingrediente) VALUES
(1, 'Mel'),
(2, 'Ervas aromáticas'),
(3, 'Frutas frescas'),
(4, 'Especiarias'),
(5, 'Chá de ervas');

-- Criar Tabela de Itens do Cardápio
CREATE TABLE ItensCardapio (
    id_item INT PRIMARY KEY,
    nome_item VARCHAR(50) NOT NULL,
    id_categoria INT,
    descricao VARCHAR(255),
    preco DECIMAL(10, 2),
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);

-- Inserir Dados na Tabela de Itens do Cardápio
INSERT INTO ItensCardapio (id_item, nome_item, id_categoria, descricao, preco) VALUES
(1, 'Poção de Chocolate Quente', 1, '-', 5.00),
(2, 'Chá de Ervas Encantadas', 1, '-', 4.50),
(3, 'Limonada de Fadas', 2, '-', 3.50),
(4, 'Smoothie de Frutas do Bosque', 2, '-', 4.00),
(5, 'Torta de Frango com Molho de Mel', 3, '-', 8.00),
(6, 'Sopa de Legumes Mágica', 3, '-', 6.50),
(7, 'Tiramisu de Contos de Fadas', 4, '-', 7.00),
(8, 'Crepe de Maçã Caramelizada', 4, '-', 5.50),
(9, 'Pãezinhos de Queijo Elficos', 5, '-', 3.00),
(10, 'Batatas Fritas com Molho de Ervas', 5, '-', 4.50);

-- Criar Tabela de Relacionamento Entre Itens e Ingredientes
CREATE TABLE RelacionamentoItensIngredientes (
    id_relacionamento INT PRIMARY KEY,
    id_item INT,
    id_ingrediente INT,
    quantidade INT,
    FOREIGN KEY (id_item) REFERENCES ItensCardapio(id_item),
    FOREIGN KEY (id_ingrediente) REFERENCES Ingredientes(id_ingrediente)
);

-- Inserir Dados na Tabela de Relacionamento Entre Itens e Ingredientes
INSERT INTO RelacionamentoItensIngredientes (id_relacionamento, id_item, id_ingrediente, quantidade) VALUES
(1, 1, 1, 2),
(2, 1, 2, 1),
(3, 1, 5, 1),
(4, 5, 1, 3),
(5, 5, 2, 2),
(6, 5, 3, 1);
