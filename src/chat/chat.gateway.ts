import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PrismaService } from '../prisma/prisma.service';

@WebSocketGateway({ cors: { origin: '*' }, namespace: 'chat' })
export class ChatGateway {
  @WebSocketServer() server: Server;

  constructor(private prisma: PrismaService) {}

  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody() data: { sessionId: string; content: string },
    @ConnectedSocket() client: Socket,
  ) {
    // Guardar mensaje del usuario
    await this.prisma.chatMessage.create({
      data: { sessionId: data.sessionId, role: 'user', content: data.content },
    });

    // TODO: Conectar con ATOM-OS AI Council para respuesta inteligente
    // const aiResponse = await this.atomOsService.askAgent(data.content);

    const replies = [
      '¡Perfecto! Un consultor BIP se contactará con vos pronto. 📧',
      '¿Te gustaría agendar una demo gratuita de ATOM-OS? 🚀',
      'BIP tiene soluciones para emprendedores, PYMES y corporaciones. ¿Cuál sos?',
      'Podés enviarnos un email a bip.cba@gmail.com o escribirnos por WhatsApp.',
    ];
    const aiResponse = replies[Math.floor(Math.random() * replies.length)];

    await this.prisma.chatMessage.create({
      data: { sessionId: data.sessionId, role: 'assistant', content: aiResponse },
    });

    this.server.to(client.id).emit('reply', { content: aiResponse });
  }

  handleConnection(client: Socket) {
    console.log('Chat connected:', client.id);
  }
}
