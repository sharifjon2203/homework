Topshiriq:  feature_1 va feature_2 degan branchlar yarating 
Instructions: git branch  commandasidan foydalanib feature 1 va feature 2 branchlarini yarating
• Har bir branchga o'tib o'sha branchdagi file ga o'zgarish kiriting, brachdan branchga o'tishda checkout branch_nomi commandasidan foydalaning. 
• o'zgarishlar kiritgandan keyin ularni avval git add .  comandasi bilan stage undan keyin git commit -m comment  komandasi bilan commit qiling.
BRANCHLARNI MERGE QILISH:
• main branchga git branch main comandasi orqali main brancha o'ting va git merge branch_nomi comandasi orqali feature 1 va feature 2 branchlarini main branchga merge qiling va qandaydir conflickt sodir bolsa uni hal qiling. 
FEATURE BRANCHLARINI O'CHIRISH:
• feature branchlarini main branchga merge qilgandan keyin, git -d branch_name commandasi orqali feature branchlarini o'chiring. 
• git log dan foydalanib commit istoriyasini(tarixini) ko'ring va feature branchlari main branchga merge bolganmi yoqmi tekshiring .
