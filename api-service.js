// Configuração da API
const API_BASE_URL = 'http://localhost:8080/api';

// Service para comunicação com o backend
const ApiService = {
    /**
     * Realiza login no backend
     * Endpoint: POST /api/contas/login
     */
    async login(cpf, senha) {
        try {
            // Remove máscara do CPF (apenas números)
            const cpfLimpo = cpf.replace(/\D/g, '');

            const response = await fetch(`${API_BASE_URL}/contas/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cpf: cpfLimpo,
                    senha: senha
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.mensagem || 'Erro ao realizar login');
            }

            // Retorna dados da conta após login bem-sucedido
            return {
                success: true,
                conta: {
                    id: data.contaId,
                    nome: data.nome,
                    cpf: data.cpf,
                    saldo: data.saldo
                },
                mensagem: data.mensagem
            };
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            return {
                success: false,
                mensagem: error.message || 'Erro ao conectar com o servidor'
            };
        }
    },

    /**
     * Realiza cadastro de nova conta no backend
     * Endpoint: POST /api/contas/cadastro
     */
    async cadastrar(dados) {
        try {
            const response = await fetch(`${API_BASE_URL}/contas/cadastro`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: dados.nome,
                    cpf: dados.cpf,
                    senha: dados.senha,
                    dataNascimento: dados.dataNascimento,
                    telefone: dados.telefone
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.mensagem || 'Erro ao realizar cadastro');
            }

            // Retorna dados da conta criada
            return {
                success: true,
                conta: {
                    id: data.contaId,
                    nome: data.nome,
                    cpf: data.cpf,
                    dataNascimento: data.dataNascimento,
                    telefone: data.telefone,
                    saldo: data.saldo
                },
                mensagem: data.mensagem
            };
        } catch (error) {
            console.error('Erro ao fazer cadastro:', error);
            return {
                success: false,
                mensagem: error.message || 'Erro ao conectar com o servidor'
            };
        }
    },

    /**
     * Busca o saldo da conta
     * Endpoint: GET /api/contas/{id}/saldo
     */
    async buscarSaldo(contaId) {
        try {
            const response = await fetch(`${API_BASE_URL}/contas/${contaId}/saldo`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Erro ao buscar saldo');
            }

            const data = await response.json();
            
            // Retorna o valor do saldo diretamente
            return typeof data === 'number' ? data : data.saldo;
        } catch (error) {
            console.error('Erro ao buscar saldo:', error);
            throw error;
        }
    },

    /**
     * Busca as últimas transações de uma conta
     * Endpoint: GET /api/transacoes/conta/{id}
     */
    async buscarTransacoes(contaId, limite = 10) {
        try {
            const response = await fetch(`${API_BASE_URL}/transacoes/conta/${contaId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Erro ao buscar transações');
            }

            const transacoes = await response.json();
            
            // Limita quantidade se necessário
            return transacoes.slice(0, limite);
        } catch (error) {
            console.error('Erro ao buscar transações:', error);
            return [];
        }
    },

    /**
     * Realiza uma transferência entre contas
     */
    async realizarTransferencia(contaOrigemId, contaDestinoId, valor) {
        try {
            const response = await fetch(`${API_BASE_URL}/transacoes/transferir`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contaOrigemId: parseInt(contaOrigemId),
                    contaDestinoId: parseInt(contaDestinoId),
                    valor: parseFloat(valor)
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.erro || 'Erro ao realizar transferência');
            }

            return data;
        } catch (error) {
            console.error('Erro na transferência:', error);
            throw error;
        }
    },

    /**
     * Lista todas as contas disponíveis (para seleção em transferências)
     * Endpoint: GET /api/contas
     */
    async listarContas() {
        try {
            const response = await fetch(`${API_BASE_URL}/contas`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Erro ao listar contas');
            }

            return await response.json();
        } catch (error) {
            console.error('Erro ao listar contas:', error);
            return [];
        }
    },

    /**
     * Verifica se a API está online
     */
    async verificarConexao() {
        try {
            const response = await fetch(`${API_BASE_URL}/contas`, {
                method: 'GET'
            });
            return response.ok;
        } catch (error) {
            console.warn('Backend não está disponível:', error);
            return false;
        }
    }
};

// Exportar para uso global
window.ApiService = ApiService;
