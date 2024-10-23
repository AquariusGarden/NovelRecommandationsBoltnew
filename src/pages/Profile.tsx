import React from 'react';
import { BookOpen, Heart, Clock, BarChart3 } from 'lucide-react';

const Profile = () => {
  const stats = [
    { icon: BookOpen, label: '已读书籍', value: '42' },
    { icon: Heart, label: '收到的赞', value: '128' },
    { icon: Clock, label: '阅读时长', value: '320小时' },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8">
        <div className="flex items-center space-x-6 mb-8">
          <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-3xl text-white">柠</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">柠檬茶</h1>
            <p className="text-white/80">爱好：玄幻、仙侠、种田文</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white/5 rounded-xl p-4 flex items-center space-x-4">
              <Icon className="w-8 h-8 text-white/80" />
              <div>
                <p className="text-white/60 text-sm">{label}</p>
                <p className="text-white text-xl font-bold">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">阅读偏好分析</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-white/80 w-20">玄幻仙侠</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-400 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <span className="text-white/80 ml-4">75%</span>
              </div>
              <div className="flex items-center">
                <span className="text-white/80 w-20">种田文</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-400 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <span className="text-white/80 ml-4">60%</span>
              </div>
              <div className="flex items-center">
                <span className="text-white/80 w-20">现代言情</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-400 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <span className="text-white/80 ml-4">45%</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">最近动态</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-indigo-400"></div>
                <div>
                  <p className="text-white">看完了《重生之医妃锦绣》</p>
                  <p className="text-white/60 text-sm">2小时前</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-indigo-400"></div>
                <div>
                  <p className="text-white">收藏了《我在仙界种田》</p>
                  <p className="text-white/60 text-sm">昨天</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;