# Kur’an Merkezli Tefekkür → Eylem Ürün Tasarımı (Mobil Uygulama)

Bu bölüm, Kur’an’daki bireysel hayata uygulanabilir ilkeleri (ahlak, davranış, niyet, sosyal ilişkiler, sabır, infak, adalet, güzel söz, kul hakkı hassasiyeti vb.) **kısa/orta/uzun vadeli hedefler** olarak ele alan; kullanıcıyı **tefekkür → eylem → iç gözlem → (opsiyonel) paylaşım** döngüsüne sokan mobil uygulama konseptinin ürün mimarisini ve UX/UI kararlarını özetler.

## Temel İlke ve Sınırlar (Etik Çerçeve)

- Ayetler **yorumlanmaz** ve **bağlamından koparılmaz**: Uygulama “hüküm çıkarma” veya “fetva” iddiası taşımaz.
- Yapay zekâ **dini otorite** gibi davranmaz: Yargılayıcı dil, kesin hükümler, kişiye tanı koyma / terapi iddiası yoktur.
- Dil: yumuşak, sade, güven veren; “yapamadın” yerine “denedin mi, ne hissettin, hangi şartta zorlaştı?” yaklaşımı.
- Gamification: sevap/puan/mertebe üzerinden değil, **istikrar, niyet ve farkındalık** üzerinden.
- Mahremiyet: varsayılan olarak özel; sosyal alan anonim ve düşük profilli.

## Bilgi Mimarisi (IA)

- **Ayet Kartı**: sure/ayet no, Arapça metin (opsiyonel), güvenilir meal(ler), “Bu ayetle ilişkili davranış/niyet teması”, “Bugün için mikro-uygulama önerisi”.
- **Hedef Ufku**:
  - Kısa vadeli: 1 gün – 1 hafta
  - Orta vadeli: 1 hafta – 1 ay
  - Uzun vadeli: alışkanlık / karakter inşası
- **Günlük Döngü**: Niyet → Uygulama → Yansıtma → (opsiyonel) Paylaşım
- **Gelişim Özeti**: haftalık/aylık “öğrenilenler”, “zorlayıcı durumlar”, “niyet cümleleri”, “istikrar eğilimi”.

## Temel Ekranlar

### 1) Onboarding

Amaç: Kullanıcıyı güvenle karşılamak, etik sınırları netleştirmek, kişiselleştirme için minimum bilgi toplamak.

- **Hoş geldin + niyet çerçevesi**: “Bu uygulama tefekkür ve davranış alışkanlığı içindir; dini hüküm/otorite değildir.”
- **Seviye ve ritim seçimi (hafif / dengeli / derin)**:
  - Günlük süre hedefi (2–5 dk / 5–10 dk / 10–15 dk)
  - Bildirim tercihleri (sabah niyet / akşam yansıtma)
- **Hassasiyet tercihleri**:
  - “Sosyal alanı hiç göstermeyin” (varsayılan açıkça sunulur)
  - Arapça metin görünümü (aç/kapat)
  - Meal tercihi (birden fazla güvenilir seçenek)
- **İlk 7 Ayet Ataması (AI)**: Kullanıcıya, ufukları dengeli olacak şekilde 7 ayet/tema tanımlanır.
  - Sunum: “7 günlük/haftalık yol haritan” gibi değil; “7 adet tefekkür ve uygulama odağı” gibi mütevazı bir dil.

### 2) Günlük Ayet (Ana Ekran)

Amaç: Kullanıcının bugünkü niyetini netleştirmesi ve küçük, uygulanabilir bir adım seçmesi.

- Üstte “Bugünün odağı” ayet kartı.
- **Niyet butonu**: “Bugün bununla amel etmeye niyet ediyorum.”
- **Mikro-adım seçimi** (3 seçenek, yumuşak dil):
  - “En küçük adım” (2 dk)
  - “Dengeli adım” (5 dk)
  - “Derin adım” (10 dk)
- **Bağlam güvenliği**:
  - “Bağlamı gör” (komşu ayetler/konu başlığı; yorum değil, sadece metin+meal düzeyi)
  - “Kaynaklar” (metin/meal sağlayıcı bilgisi)
- Gün içinde “hatırlatma” küçük, rahatsız etmeyen nudgelar.

### 3) Yansıtma (Gün Sonu)

Amaç: Yapamadı/yaptı ikiliğinden çok, iç gözlem ve öğrenme üretmek.

- Kısa form (1–2 dk):
  - “Bugün ayeti nasıl uygulamaya çalıştın?” (serbest metin)
  - “Nerede zorlandın?” (etiket + serbest metin)
  - “Ne hissettin?” (duygu seçimi + serbest metin)
  - “Bir değişiklik fark ettin mi?” (evet/hayır/emin değilim)
- **AI geri dönüşü** (yargısız):
  - 2–4 satır “yansıtma özeti”
  - 2–3 adet tefekkür sorusu (yorum değil; niyet/bağlam/engel farkındalığı)
  - “Yarın için daha küçük bir adım istersen…” önerisi

### 4) Sosyal Alan (Opsiyonel & Anonim)

Amaç: İlham ve yalnızlık hissini azaltma; gösteriş/riya ve kıyas riskini minimumda tutma.

- Varsayılan mod: **Okuma** (paylaşım kapalı/onaysız değil; kullanıcı isterse açar)
- İçerik kartı formatı (kısa ve sade):
  - “Bugün bunu nasıl denedim?” (maks. karakter)
  - “Zorlandığım yer” (seçimli)
  - “Bende bıraktığı iz” (1 cümle)
- Görünür metrikler kısıtlı:
  - **Beğeni sayısı yok**, takipçi yok, rozet yok.
  - “Kaydet/teşekkür et” gibi sayısızlaştırılmayan etkileşim.
- Keşif: “Aynı ayeti deneyenlerden seçmeler” (sıralama yok; zaman/çeşitlilik dengeli).
- Güvenlik: şikayet/filtre, kişisel bilgi maskeleme, “dini hüküm iddiası” içeriğini otomatik uyarı.

### 5) Profil / Yolculuk

Amaç: Kullanıcıya “ben kimim” değil “ben ne öğreniyorum” aynası vermek.

- “Niyet cümleleri” arşivi (kullanıcının kendi cümleleri)
- Haftalık/aylık özet:
  - “Zorlandığın anlar” kümeleri (ör. öfke anı, yorgunluk, sosyal ortam)
  - “İyi gelen pratikler”
  - “İstikrar ritmi” (streak baskısı olmadan; ör. “Bu ay 12 gün denedin”)
- Ayarlar: sosyal alan, bildirimler, meal seçimi, veri dışa aktarma, hesap silme.

## Kullanıcı Yolculuğu (User Flow)

1. Onboarding → etik çerçeve onayı → tercihleri seç → AI 7 odak ataması
2. Günlük Ayet → niyet → mikro-adım seçimi → gün içinde hafif hatırlatma
3. Akşam Yansıtma → form → AI yargısız geri bildirim + tefekkür soruları
4. (Opsiyonel) Sosyal alan → sadece okuma veya paylaşım
5. Profil → haftalık/aylık özet → ufuk/denge ayarı → yeni 7’li döngü

Edge-case’ler:
- Kullanıcı hiç yazmak istemezse: “tek dokunuş yansıtma” (duygu + 1 cümle) desteklenir.
- Zorlayıcı gün: “Bugün sadece niyet et ve bırak” modu (başarısızlık dili yok).
- Sosyal alan tetikliyorsa: tek dokunuşla tamamen gizleme.

## Yapay Zekâ Nerede ve Nasıl Kullanılır?

### A) İlk 7 Ayet Ataması (Dengeli Seçim)

- Girdi: onboarding tercihleri, geçmiş tamamlamalar, zorlanma temaları, seçilen ufuk (hafif/dengeli/derin).
- Çıktı: Kısa/orta/uzun vadeden dengeli 7 odak.
- Kural: Aynı tema arka arkaya bindirilmez (ör. sürekli “öfke” değil); sosyal ilişki, dil, sabır, infak, adalet gibi çeşitlilik.

### B) Gün Sonu Yazılarını Yargısız Analiz

- Amaç: “başardın/başaramadın” değil, **engel-durum-duygu** haritası çıkarmak.
- Yapı:
  - Duygu özeti (nötr/pozitif/karma)
  - Zorlanma bağlamı (zaman, ortam, tetikleyici)
  - Küçük bir “yeniden çerçeveleme” (şefkatli dil)

### C) Tefekkür Soruları Üretimi

- Sorular yorum içermez; davranış ve niyet düzeyinde kalır.
- Örnek soru şablonları:
  - “Bunu yaparken niyetini en çok ne güçlendirdi?”
  - “Zorlandığın an, hangi alternatif küçük adım mümkün olurdu?”
  - “Bu deneyim sana kendinle ilgili ne fark ettirdi?”

### D) Uzun Vadeli Özetleme

- Haftalık: 5–7 satır “bu hafta ne öğrendin?”
- Aylık: temalar, tekrar eden tetikleyiciler, işe yarayan stratejiler.

### E) Güvenlik ve Kısıtlar (AI Guardrails)

- AI, ayet “anlamını genişletmez” ve hüküm kurmaz.
- AI, ayet/metin kaynaklarını **sadece uygulama içindeki doğrulanmış içerik deposundan** (retrieval) kullanır.
- Kullanıcı “fetva/hüküm” sorarsa: nazikçe sınır koyar ve “uzmana danış” yönlendirmesi verir.

## Ayet–Eylem Eşleştirme Mantığı

Bu ürünün kalbi, ayeti “yargı” değil “uygulanabilir odak” olarak sunan bir eşleştirme sistemidir.

### İçerik Modeli (Öneri)

- Ayet: sure/ayet, Arapça, meal(ler), kısa bağlam notu (yorum değil; konu/iniş bağlamı iddiası olmayan), tema etiketleri.
- Eylem şablonları:
  - Mikro (2 dk): “bugün bir kişiye kırmadan cevap vermeyi seç” gibi.
  - Orta (5 dk): “tetikleyici anını yaz, bir cümlelik alternatif cevap hazırla”.
  - Derin (10 dk): “haftalık küçük infak planı taslağı”.
- Ufuk: kısa/orta/uzun
- Zorluk: 1–5
- Uygunluk koşulları: “maddi imkân gerektirir/şart değil”, “sosyal ortam gerektirir/şart değil” gibi.

### Atama Algoritması (Özet)

- Denge hedefi: 7 odakta
  - en az 3 kısa vadeli,
  - en az 2 orta vadeli,
  - en az 1 uzun vadeli,
  - temalarda çeşitlilik.
- Kişiselleştirme:
  - Kullanıcının zorlandığı temaya “daha küçük adım” varyantı.
  - Başarı/stres durumuna göre zorluk ayarı.
- Tekrar yönetimi:
  - Aynı ayet kısa aralıkla tekrar verilmez.
  - Aynı tema tekrarında eylem şablonu değiştirilir (kıyas/yorulma azaltılır).

## Sosyal Alanın Riya ve Kıyas Riskini Azaltan Tasarımı

- Varsayılan gizlilik: sosyal alan kapalı veya “sadece okuma” ile başlar.
- Gösteriş tetikleyicilerini kaldır:
  - beğeni, takipçi, rozet, sıralama, “en iyi” listeleri yok.
- Paylaşım freni:
  - Paylaşmadan önce “Bu paylaşım niyetini nasıl etkiler?” tek soruluk nazik bir kontrol.
  - Paylaşım, **özel yansıtma tamamlandıktan sonra** açılır.
- İçerik standardı:
  - “Ben merkezli” kısa anlatım; başkalarına nasihat/hüküm dili otomatik uyarı.
- Zaman gecikmesi + örnekleme:
  - Paylaşımlar anlık akış yerine periyodik “seçmeler” olarak gelir (dopamin döngüsü azaltılır).

## Uygulamanın Uzun Vadede Oluşturacağı Dönüşüm

- Kullanıcı ayeti “okunan bilgi”den “günlük niyet ve davranış odağı”na taşımayı öğrenir.
- Başarı odaklı değil; **farkındalık ve tekrar** odaklı bir iç disiplin gelişir.
- Zorlanma anlarını tanır (tetikleyici haritası) ve küçük adımlarla ilerleme becerisi kazanır.
- Sosyal boyut, yalnızlık hissini azaltırken riya/kıyas tuzaklarını büyütmez.

## Başarı Ölçümü (Sevap/Puan Değil, İstikrar/Niyet)

- “Gün sayısı” yerine “deneme ritmi” (haftada kaç gün niyet+yansıtma?)
- Yansıtma tamamlama oranı (kısa form dahil)
- Zorluk etiketlerinde zamanla azalma / strateji çeşitliliği
- Kullanıcının kendi ifadelerinde “öğrenilenler” yoğunluğu (AI özetlerinden türetilen, sayısızlaştırılmayan metrik)

## Ton ve Metin Stili (UI Copy)

- Kısa, sıcak, kesin hüküm vermeyen.
- Örnek:
  - “Bugün denemek ister misin?”
  - “Zorlandığın an neydi?”
  - “Bu niyeti yarın daha küçük bir adımla sürdürmek ister misin?”