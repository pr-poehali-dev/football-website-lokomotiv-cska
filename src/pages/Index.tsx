import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('main');

  const matchData = {
    home: { name: 'Локомотив', score: 2, color: 'bg-primary' },
    away: { name: 'ЦСКА', score: 0, color: 'bg-secondary' },
    date: '18 октября 2025',
    stadium: 'РЖД Арена',
    goals: [
      { team: 'Локомотив', player: 'Комаров', minute: 34 },
      { team: 'ЦСКА', player: 'Тендинит', minute: 56 },
      { team: 'Локомотив', player: 'Капустин', minute: 75 }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/9b3d9cb5-2706-4760-b7ce-37c990492a0f/files/73815ce0-eedc-4f4c-9071-d7231abce272.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Футбольный портал
          </h1>
          <div className="flex items-center gap-8 animate-scale-in">
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">{matchData.home.name}</div>
              <Badge className={`${matchData.home.color} text-white text-2xl px-6 py-2`}>
                {matchData.home.score}
              </Badge>
            </div>
            <div className="text-4xl font-bold">:</div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">{matchData.away.name}</div>
              <Badge className={`${matchData.away.color} text-white text-2xl px-6 py-2`}>
                {matchData.away.score}
              </Badge>
            </div>
          </div>
          <p className="mt-6 text-xl opacity-90">{matchData.date} • {matchData.stadium}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="main" className="text-lg">
              <Icon name="Home" className="mr-2" size={20} />
              Главная
            </TabsTrigger>
            <TabsTrigger value="matches" className="text-lg">
              <Icon name="Trophy" className="mr-2" size={20} />
              Матчи
            </TabsTrigger>
          </TabsList>

          <TabsContent value="main" className="animate-fade-in">
            <div className="grid gap-6">
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Icon name="Zap" className="text-accent" size={32} />
                  Обзор матча
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  В напряжённом противостоянии на РЖД Арене Локомотив одержал уверенную победу над ЦСКА 
                  со счётом 2:0. Команда хозяев продемонстрировала отличную игру в обороне и реализовала 
                  свои моменты в атаке.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <Icon name="Target" className="mx-auto mb-2 text-primary" size={32} />
                    <div className="text-3xl font-bold">3</div>
                    <div className="text-muted-foreground">Гола забито</div>
                  </div>
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <Icon name="Users" className="mx-auto mb-2 text-secondary" size={32} />
                    <div className="text-3xl font-bold">45,000</div>
                    <div className="text-muted-foreground">Зрителей</div>
                  </div>
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <Icon name="Clock" className="mx-auto mb-2 text-accent" size={32} />
                    <div className="text-3xl font-bold">90'</div>
                    <div className="text-muted-foreground">Минут игры</div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Icon name="ListOrdered" className="text-primary" size={32} />
                  События матча
                </h2>
                <div className="space-y-4">
                  {matchData.goals.map((goal, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors"
                    >
                      <Badge 
                        className={`text-lg px-4 py-2 ${
                          goal.team === 'Локомотив' ? 'bg-primary' : 'bg-secondary'
                        } text-white`}
                      >
                        {goal.minute}'
                      </Badge>
                      <Icon name="Circle" className="text-accent" size={12} />
                      <div className="flex-1">
                        <div className="font-bold text-xl">{goal.player}</div>
                        <div className="text-muted-foreground">{goal.team}</div>
                      </div>
                      <Icon name="Goal" fallback="Target" className="text-accent" size={28} />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="matches" className="animate-fade-in">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Icon name="CalendarDays" className="text-primary" size={32} />
                Детали матча
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">Локомотив</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-primary/10 rounded">
                      <span className="font-semibold">Голы</span>
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="font-semibold">Удары по воротам</span>
                      <span className="text-xl font-bold">8</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="font-semibold">Владение мячом</span>
                      <span className="text-xl font-bold">54%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-secondary">ЦСКА</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-secondary/10 rounded">
                      <span className="font-semibold">Голы</span>
                      <span className="text-xl font-bold">0</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="font-semibold">Удары по воротам</span>
                      <span className="text-xl font-bold">5</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="font-semibold">Владение мячом</span>
                      <span className="text-xl font-bold">46%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-accent" size={28} />
                  Ключевые моменты
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                    <Badge className="bg-accent text-white">34'</Badge>
                    <div>
                      <p className="font-bold">ГОЛ! Комаров открывает счёт</p>
                      <p className="text-muted-foreground">
                        Отличная командная комбинация завершилась точным ударом Комарова
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                    <Badge className="bg-secondary text-white">56'</Badge>
                    <div>
                      <p className="font-bold">Гол не засчитан - офсайд</p>
                      <p className="text-muted-foreground">
                        Тендинит поразил ворота, но гол отменён из-за положения вне игры
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                    <Badge className="bg-accent text-white">75'</Badge>
                    <div>
                      <p className="font-bold">ГОЛ! Капустин удваивает преимущество</p>
                      <p className="text-muted-foreground">
                        Мощный удар Капустина не оставил шансов вратарю ЦСКА
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">Футбольный портал © 2025</p>
          <p className="text-muted-foreground mt-2">Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
