
import 'package:flutter/material.dart';

class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({super.key});

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  final PageController _pageController = PageController();
  int _currentPage = 0;

  // User selections
  String? _selectedRhythm;
  bool _morningNotification = true;
  bool _eveningNotification = true;
  bool _hideSocial = false;
  bool _showArabicText = true;
  String? _selectedTranslation = 'Diyanet Vakfı';

  final List<String> _translationOptions = ['Diyanet Vakfı', 'Elmalılı Hamdi Yazır', 'Yaşar Nuri Öztürk'];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: PageView(
                controller: _pageController,
                physics: const NeverScrollableScrollPhysics(), // Disable swipe
                onPageChanged: (int page) {
                  setState(() {
                    _currentPage = page;
                  });
                },
                children: [
                  _buildWelcomePage(),
                  _buildRhythmAndNotificationPage(),
                  _buildSensitivityPage(),
                ],
              ),
            ),
            _buildNavigation(),
          ],
        ),
      ),
    );
  }

  Widget _buildWelcomePage() {
    return OnboardingPageContent(
      title: "Kur'an Merkezli Bir Tefekkür Yolculuğu",
      children: [
        const Text(
          "Bu uygulama, ayetler üzerinde düşünmek ve bu düşünceleri günlük hayata yansıtmak için bir araçtır.",
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 16),
        ),
        const SizedBox(height: 20),
        Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: Colors.amber.withValues(alpha: 0.1),
            borderRadius: BorderRadius.circular(8),
            border: Border.all(color: Colors.amber.shade200),
          ),
          child: const Text(
            "Önemli: Bu bir fetva veya dini otorite platformu değildir. Amacımız, yargılamadan ve bağlamından koparmadan tefekkür etmeye teşvik etmektir.",
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 14, color: Colors.black87),
          ),
        ),
      ],
    );
  }

  Widget _buildRhythmAndNotificationPage() {
    return OnboardingPageContent(
      title: "Seviye ve Ritim",
      children: [
        const Text("Günlük ne kadar vakit ayırmak istersiniz?"),
        const SizedBox(height: 10),
        Wrap(
          spacing: 8.0,
          alignment: WrapAlignment.center,
          children: [
            ChoiceChip(
              label: const Text("Hafif (2-5 dk)"),
              selected: _selectedRhythm == 'hafif',
              onSelected: (selected) {
                setState(() => _selectedRhythm = 'hafif');
              },
            ),
            ChoiceChip(
              label: const Text("Dengeli (5-10 dk)"),
              selected: _selectedRhythm == 'dengeli',
              onSelected: (selected) {
                setState(() => _selectedRhythm = 'dengeli');
              },
            ),
            ChoiceChip(
              label: const Text("Derin (10-15 dk)"),
              selected: _selectedRhythm == 'derin',
              onSelected: (selected) {
                setState(() => _selectedRhythm = 'derin');
              },
            ),
          ],
        ),
        const SizedBox(height: 20),
        const Divider(),
        const SizedBox(height: 20),
        const Text("Bildirim tercihleri"),
        SwitchListTile(
          title: const Text("Sabah niyet hatırlatması"),
          value: _morningNotification,
          onChanged: (value) {
            setState(() => _morningNotification = value);
          },
        ),
        SwitchListTile(
          title: const Text("Akşam yansıtma hatırlatması"),
          value: _eveningNotification,
          onChanged: (value) {
            setState(() => _eveningNotification = value);
          },
        ),
      ],
    );
  }

  Widget _buildSensitivityPage() {
    return OnboardingPageContent(
      title: "Hassasiyet ve Tercihler",
      children: [
        SwitchListTile(
          title: const Text("Sosyal alanı gösterme"),
          subtitle: const Text("Diğer kullanıcıların paylaşımlarını gizle."),
          value: _hideSocial,
          onChanged: (value) {
            setState(() => _hideSocial = value);
          },
        ),
        SwitchListTile(
          title: const Text("Arapça metin görünümü"),
          subtitle: const Text("Ayetlerin orijinal metnini göster."),
          value: _showArabicText,
          onChanged: (value) {
            setState(() => _showArabicText = value);
          },
        ),
        const SizedBox(height: 10),
        const Divider(),
        const SizedBox(height: 10),
        ListTile(
          title: const Text("Meal tercihi"),
          trailing: DropdownButton<String>(
            value: _selectedTranslation,
            items: _translationOptions.map((String value) {
              return DropdownMenuItem<String>(
                value: value,
                child: Text(value),
              );
            }).toList(),
            onChanged: (newValue) {
              setState(() {
                _selectedTranslation = newValue;
              });
            },
          ),
        ),
      ],
    );
  }

  Widget _buildNavigation() {
    return Padding(
      padding: const EdgeInsets.all(20.0),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: List.generate(3, (index) => _buildDot(index)),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            style: ElevatedButton.styleFrom(
              minimumSize: const Size(double.infinity, 50),
            ),
            onPressed: () {
              if (_currentPage == 2) {
                // TODO: Save preferences and navigate to home screen
                print("Onboarding completed!");
                print("Rhythm: $_selectedRhythm");
                print("Notifications: Morning=$_morningNotification, Evening=$_eveningNotification");
                print("Preferences: Hide Social=$_hideSocial, Show Arabic=$_showArabicText, Translation=$_selectedTranslation");
              } else {
                _pageController.nextPage(
                  duration: const Duration(milliseconds: 400),
                  curve: Curves.easeInOut,
                );
              }
            },
            child: Text(_currentPage == 2 ? "Yolculuğa Başla" : "İlerle"),
          ),
          const SizedBox(height: 10),
          if (_currentPage > 0)
            TextButton(
              onPressed: () {
                _pageController.previousPage(
                  duration: const Duration(milliseconds: 400),
                  curve: Curves.easeInOut,
                );
              },
              child: const Text("Geri"),
            ),
        ],
      ),
    );
  }

  AnimatedContainer _buildDot(int index) {
    return AnimatedContainer(
      duration: const Duration(milliseconds: 200),
      margin: const EdgeInsets.only(right: 5),
      height: 8,
      width: _currentPage == index ? 24 : 8,
      decoration: BoxDecoration(
        color: _currentPage == index ? Theme.of(context).primaryColor : const Color(0xFFD8D8D8),
        borderRadius: BorderRadius.circular(4),
      ),
    );
  }
}

class OnboardingPageContent extends StatelessWidget {
  final String title;
  final List<Widget> children;

  const OnboardingPageContent({
    super.key,
    required this.title,
    required this.children,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(
            title,
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(fontWeight: FontWeight.bold),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 30),
          ...children,
        ],
      ),
    );
  }
}
